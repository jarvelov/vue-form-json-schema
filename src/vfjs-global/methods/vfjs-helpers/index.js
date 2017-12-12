import { set } from 'lodash';
import vfjsComponentMixin from '../../../vfjs-component';

const vfjsHelpers = {
  vfjsHelperCreateField(vfjsFieldUiSchema) {
    const {
      id: vfjsFieldUuid,
      children = [],
      component,
      model: vfjsFieldModelKey = '',
      fieldOptions = {},
    } = vfjsFieldUiSchema;

    const isArray = this.vfjsHelperFieldIsArray(vfjsFieldModelKey);

    const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
    const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
    const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
    const vfjsState = this.getVfjsState();
    const vfjsModel = this.getVfjsModel();

    return {
      component: this.vfjsHelperCreateComponentWrapper(component, vfjsFieldUuid, fieldOptions),
      children: isArray
        ? children.reduce((flattenedChildren, child) => ([
          ...flattenedChildren,
          ...child.map(this.vfjsHelperCreateField),
        ]), [])
        : children.map(this.vfjsHelperCreateField),
      props: {
        ...fieldOptions,
        children,
        id: vfjsFieldUuid,
        model: vfjsFieldModel,
        modelKey: vfjsFieldModelKey,
        schema: vfjsFieldSchema,
        state: vfjsFieldState,
        uiSchema: vfjsFieldUiSchema,
        value: vfjsFieldModel,
        vfjsBus: this.vfjsBus,
        vfjsFieldOptions: fieldOptions,
        vfjsFieldModel,
        vfjsFieldModelKey,
        vfjsFieldSchema,
        vfjsFieldState,
        vfjsFieldUiSchema,
        vfjsFieldUuid,
        vfjsModel,
        vfjsState,
      },
    };
  },
  vfjsHelperCreateComponentWrapper(component, id, fieldOptions) {
    if (typeof component === 'string' && component in this.vfjsComponents) {
      return this.vfjsHelperCreateComponentWrapper(
        this.vfjsComponents[component],
        id,
        fieldOptions,
      );
    }

    if (id && id in this.vfjsComponentsCreated) {
      return this.vfjsComponentsCreated[id];
    }

    const vfjsComponent = {
      name: 'vue-form-json-schema-field-wrapper',
      mixins: [vfjsComponentMixin],
      render() {
        return this.$createElement(component, {
          ...this.vfjsAttributes,
        }, this.$slots.default);
      },
    };

    if (id && !(id in this.vfjsComponentsCreated)) {
      this.vfjsComponentsCreated[id] = vfjsComponent;
    }

    return vfjsComponent;
  },
  vfjsHelperGenerateUuid() {
    let date = Date.now();

    if (
      typeof window.performance !== 'undefined' &&
      typeof window.performance.now === 'function'
    ) {
      date += window.performance.now(); // use high-precision timer if available
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = ((date + Math.random()) * 16) % 16 | 0; // eslint-disable-line no-bitwise
      date = Math.floor(date / 16);

      return (
        char === 'x'
          ? random
          : (random & (0x3 | 0x8)) // eslint-disable-line no-bitwise
      ).toString(16);
    });
  },
  vfjsHelperApplyFieldModel(key, value) {
    const newVfjsModel = Object.assign({}, this.getVfjsModel());
    set(newVfjsModel, key, value);
    return newVfjsModel;
  },
  vfjsHelpersGenerateFieldUuid({ children = [], ...field }) {
    return ({
      ...field,
      id: this.vfjsHelperGenerateUuid(),
      children: children.map(this.vfjsHelpersGenerateFieldUuid),
    });
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
  vfjsHelperSchemaHasRequiredField(schema, fieldKey) {
    return (schema && schema.required && Array.isArray(schema.required))
      ? schema.required.indexOf(fieldKey) !== -1
      : false;
  },
  vfjsHelperFieldIsRequired(model) {
    if (model) {
      const parentModel = this.vfjsHelperGetParentModel(model);
      if (parentModel) {
        const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
        const parentSchema = this.getVfjsFieldSchema(model);
        return this.vfjsHelperSchemaHasRequiredField(parentSchema, relativeModel);
      }

      const vfjsSchema = this.getVfjsSchema();
      return this.vfjsHelperSchemaHasRequiredField(vfjsSchema, model);
    }

    return false;
  vfjsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfjsFieldSchema(key);
    return schema ? schema.type === 'array' : false;
  },
  vfjsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
};

export default vfjsHelpers;
