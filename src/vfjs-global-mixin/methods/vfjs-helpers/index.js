import { set, cloneDeep, merge } from 'lodash';
import vfjsFieldComponent from '../../../vfjs-field-component';

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
      valueProp: vfjsFieldValueProp = this.vfjsOptions.valueProp,
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
    // but only if the error handler does not have children of its own or
    // domProps.innerHTML is set
    const { domProps } = vfjsFieldOptions;
    const generateErrorsAsChildren = vfjsFieldErrorHandler
      && vfjsFieldErrors.length > 0
      && (!domProps || !domProps.innerHTML)
      && children.length === 0;

    const vfjsChildren = generateErrorsAsChildren
      ? this.vfjsHelperGetErrors(vfjsFieldErrors, vfjsFieldId)
      : children.map(this.vfjsHelperCreateField);

    const props = {
      ...vfjsFieldOptions,
      vfjsBus: this.vfjsBus,
      vfjsChildrenUiSchema: children,
      vfjsOptions: this.vfjsOptions,
      vfjsChildren,
      vfjsFieldErrorHandler,
      vfjsFieldErrorOptions,
      vfjsFieldErrors,
      vfjsFieldId,
      vfjsFieldModel,
      vfjsFieldModelKey,
      vfjsFieldOptions,
      vfjsFieldRequired,
      vfjsFieldSchema,
      vfjsFieldSchemas,
      vfjsFieldState,
      vfjsFieldUiSchema,
      vfjsFieldValueProp,
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
  vfjsHelperCreateComponent({ children = [], component, props }) {
    // If the component matches one of the local components
    // passed in with the `components` prop
    const localComponent = this.vfjsComponents[component];

    if (!props.vfjsFieldModelKey) {
      return this.$createElement(
        localComponent || component,
        {
          key: props.vfjsFieldId,
          ...props.vfjsFieldOptions,
        },
        children,
      );
    }

    const { slot } = props.vfjsFieldOptions;

    return this.$createElement(
      vfjsFieldComponent,
      {
        key: `${props.key || props.vfjsFieldId}-wrapper`,
        slot,
        props: {
          ...props,
          vfjsComponent: localComponent || component,
        },
      },
      children,
    );
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
      children: children.map((child, i) => this.vfjsHelperGenerateField(child, (i + 1) * (level + 1))),
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
    return children.reduce(
      (allChildren, child) => [
        ...allChildren,
        this.vfjsHelperChildArrayMapper(child, model, index),
      ],
      [],
    );
  },
  vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? `${parentModel}.${index}.${relativeModel}` : model;
  },
  vfjsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfjsHelperFieldIsRequired(model) {
    if (model) {
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
  vfjsHelperGetFieldsWithClearOnHide(fields = []) {
    return fields.reduce((models, { children = [], displayOptions = {}, model }) => {
      if (displayOptions.clearOnHide) {
        if (model) {
          // eslint-disable-next-line no-param-reassign
          models[model] = displayOptions.clearOnHide;
        } else if (!model && typeof displayOptions.clearOnHide === 'string') {
          // eslint-disable-next-line no-param-reassign
          models[displayOptions.clearOnHide] = displayOptions.clearOnHide;
        }
      }

      return {
        ...models,
        ...this.vfjsHelperGetFieldsWithClearOnHide(children),
      };
    }, {});
  },
  vfjsHelperCastValueToSchemaType(key, value) {
    if (typeof value !== 'undefined') {
      const schema = this.getVfjsSchema(key);

      if (!schema) {
        return value;
      }

      // Convert to a numeric value
      if (schema && schema.type === 'number') {
        return Number(value);
      }

      if (schema && schema.type === 'integer') {
        return parseInt(value);
      }

      // Convert to a boolean value
      if (schema && schema.type === 'boolean' && (value === 'true' || value === 'false')) {
        return value === 'true';
      }
    }

    return value;
  },
  vfjsHelperSchemaHasErrors(schema, model) {
    const value = typeof model === 'undefined' ? this.getVfjsModel() : this.getVfjsFieldModel(model);

    this.ajv.validate(schema, value);
    const oldErrors = this.ajv.errors ? this.ajv.errors : [];

    return oldErrors.length === 0;
  },
  vfjsHelperFieldDynamicProperties({ dynamicOptions, ...field }) {
    if (!dynamicOptions) {
      return null;
    }

    if (Array.isArray(dynamicOptions)) {
      return dynamicOptions.reduce((properties, { schema, model, options }) => {
        if (this.vfjsHelperSchemaHasErrors(schema, model)) {
          return merge(properties, options);
        }

        return properties;
      });
    }

    const { schema, model, options } = dynamicOptions;
    if (this.vfjsHelperSchemaHasErrors(schema, model)) {
      return options;
    }

    return null;
  },
  getVfjsFieldsModels(fields, fieldModels = []) {
    return fields.reduce((models, { children = [], model }) => {
      if (model) {
        if (models.indexOf(model) === -1) {
          models.push(model);
        }
      }

      return this.getVfjsFieldsModels(children, models);
    }, fieldModels);
  },
};

export default vfjsHelpers;
