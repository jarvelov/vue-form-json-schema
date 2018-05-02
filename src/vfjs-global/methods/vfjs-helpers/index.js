import { set, cloneDeep } from 'lodash';
import vfjsComponentWrapper from '../../../vfjs-component-wrapper';

const vfjsHelpers = {
  vfjsHelperCreateField(vfjsFieldUiSchema) {
    const {
      id: vfjsFieldId,
      children = [],
      component,
      errorHandler: vfjsFieldErrorHandler,
      errorOptions: vfjsFieldErrorOptions = {},
      fieldOptions: vfjsFieldOptions = {},
      model: vfjsFieldModelKey = '',
      required: vfjsFieldRequired = false,
    } = vfjsFieldUiSchema;

    const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
    const vfjsFieldSchemas = this.schemas;
    const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
    const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
    const vfjsModel = this.getVfjsModel();
    const vfjsState = this.getVfjsState();

    // Get field errors
    const { vfjsFieldErrors = [] } = vfjsFieldState;

    // If this field is an errorHandler we pass the errors as the children
    // Otherwise its treated normally
    const vfjsChildren = (vfjsFieldErrors.length > 0 && vfjsFieldErrorHandler)
      ? this.vfjsHelperGetErrors(vfjsFieldErrors, vfjsFieldId)
      : this.vfjsHelperGetChildren(children, vfjsFieldModelKey);

    const props = {
      ...vfjsFieldOptions,
      children: vfjsChildren,
      id: vfjsFieldId,
      errorOptions: vfjsFieldErrorOptions,
      errors: vfjsFieldErrors,
      fieldOptions: vfjsFieldOptions,
      model: vfjsFieldModel,
      modelKey: vfjsFieldModelKey,
      required: vfjsFieldRequired,
      schema: vfjsFieldSchema,
      schemas: vfjsFieldSchemas,
      state: vfjsFieldState,
      uiSchema: vfjsFieldUiSchema,
      value: vfjsFieldModel,
      vfjsBus: this.vfjsBus,
      vfjsChildren,
      vfjsFieldId,
      vfjsFieldErrorOptions,
      vfjsFieldErrors,
      vfjsFieldModel,
      vfjsFieldModelKey,
      vfjsFieldOptions,
      vfjsFieldRequired,
      vfjsFieldSchema,
      vfjsFieldSchemas,
      vfjsFieldState,
      vfjsFieldUiSchema,
      vfjsModel,
      vfjsState,
    };

    return this.vfjsHelperCreateComponent({
      children: vfjsChildren,
      component,
      props,
    });
  },
  vfjsHelperGetErrors(errors = [], id) {
    return errors.map((error, index) => this.vfjsHelperCreateField({
      id: `${id}-error-${index}`,
      component: 'div',
      fieldOptions: {
        class: ['vfjs-error', 'vfjs-default-error-handler'],
        domProps: {
          innerHTML: error.message,
        },
      },
    }));
  },
  vfjsHelperGetChildren(children, modelKey) {
    const isArray = this.vfjsHelperFieldIsArray(modelKey);
    return isArray
      ? children.reduce((flattenedChildren, child) => ([
        ...flattenedChildren,
        ...child.map(this.vfjsHelperCreateField),
      ]), [])
      : children.map(this.vfjsHelperCreateField);
  },
  vfjsHelperHashString(string, binary = 62) {
    let integer = 0;

    for (let i = 0; i < string.length; i++) {
      const char = string.charCodeAt(i);
      integer = (integer * 33) ^ char; // eslint-disable-line no-bitwise
    }

    // Convert int to unsigned to get a positive number
    integer >>>= 0; // eslint-disable-line no-bitwise

    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = [];

    // Create an alphanumeric hash of unsigned int
    while (integer >= binary) {
      const char = integer % binary;
      array.push(chars[char]);
      integer = Math.floor(integer / binary);
    }

    return array.join('');
  },
  vfjsHelperCreateComponent({
    children = [],
    component,
    props,
  }) {
    if (!props.vfjsFieldModelKey) {
      return this.$createElement(component, {
        key: props.vfjsFieldId,
        ...props.vfjsFieldOptions,
      }, children);
    }

    // If the component matches one of the local components
    // passed in with the `components` prop
    const localComponent = this.vfjsComponents[component];

    return this.$createElement(vfjsComponentWrapper, {
      key: `${props.vfjsFieldId}-wrapper`,
      props: {
        ...props,
        component: localComponent || component,
      },
    }, children);
  },
  vfjsHelperApplyFieldModel(key, value) {
    const newVfjsModel = cloneDeep(this.getVfjsModel());
    set(newVfjsModel, key, value);
    return newVfjsModel;
  },
  // The level param helps us to differentiate further between fields.
  // As the same field configuration may be present throughout the ui schema
  // and thus have the same hash.
  //
  // We mediate this by providing the depth level as a second param
  // which will make the hash unique for every field
  vfjsHelperGenerateField(field, level = 0) {
    if (!field) {
      return false;
    }

    const { children = [], ...fieldWithoutChildren } = field;
    const objString = JSON.stringify({ fieldWithoutChildren, level });
    const id = this.vfjsHelperHashString(objString);

    return {
      ...field,
      id,
      children: children.map((child, i) =>
        this.vfjsHelperGenerateField(child, (i + 1) * (level + 1))),
    };
  },
  vfjsHelperChildArrayMapper({ model, children = [], ...child }, parentModel, index) {
    return {
      ...child,
      model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
      children: this.vfjsHelperChildArrayReducerMapper(parentModel, children, index),
    };
  },
  vfjsHelperChildArrayReducerMapper(model, children = [], index) {
    return children.reduce((allChildren, child) => ([
      ...allChildren,
      this.vfjsHelperChildArrayMapper(child, model, index),
    ]), []);
  },
  vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? `${parentModel}.${index}.${relativeModel}` : model;
  },
  vfjsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfjsHelperGetParentModel(model) {
    const parentIndex = String(model).lastIndexOf('.');
    return String(model).substr(0, parentIndex);
  },
  vfjsHelperFieldIsRequired(model) {
    if (model) {
      const parentModel = this.vfjsHelperGetParentModel(model);
      if (parentModel) {
        return this.vfjsFieldsRequired.indexOf(parentModel) !== -1;
      }

      return this.vfjsFieldsRequired.indexOf(model) !== -1;
    }

    return false;
  },
  vfjsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfjsFieldSchema(key);
    return schema ? Array.isArray(schema.items) : false;
  },
  vfjsHelperGetFieldsWithClearOnHide(fields) {
    return fields.reduce((models, { children = [], displayOptions = {}, model }) => {
      const fieldModel = model
        ? {
          [model]: displayOptions.clearOnHide,
        }
        : {};

      return {
        ...models,
        ...fieldModel,
        ...this.vfjsHelperGetFieldsWithClearOnHide(children),
      };
    }, {});
  },
};

export default vfjsHelpers;
