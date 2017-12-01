import { get } from 'lodash';

const vfsMethodsGettersMixin = {
  getVfsField(uiSchema) {
    const {
      children = [],
      component,
      model = '',
      field,
      fieldOptions,
      ...options
    } = uiSchema;

    return {
      Component: component || this.getVfsFieldComponent(field),
      children: children.map(this.getVfsField),
      props: {
        ...options,
        ...fieldOptions,
        model,
        vfsBus: this.vfsBus,
        vfsModel: this.vfsModel,
        vfsFieldModelKey: model,
        vfsFieldSchema: this.getVfsFieldSchema(model),
        vfsFieldUiSchema: uiSchema,
        value: this.getVfsModel(model),
      },
    };
  },
  getVfsFieldSchema(key) {
    if (key) {
      return this.getVfsSchema(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsSchema(this.vfsFieldModelKey)
      : null;
  },
  getVfsSchema(key) {
    if (key) {
      return get(this.getVfsSchema.properties, key, this.getVfsSchemaFallback(key));
    }

    return this.vfsSchema;
  },
  getVfsSchemaFallback(key) {
    const keys = key.split('.');
    const jsonSchemaPath = keys.reduce((path, subPath) => {
      if (path) {
        return `${path}.properties.${subPath}`;
      }

      return `properties.${subPath}`;
    }, '');

    return get(this.vfsSchema, jsonSchemaPath);
  },
  getVfsFieldComponent(key) {
    return this.vfsComponents[key];
  },
  getVfsFieldModel(key) {
    if (key) {
      return this.getVfsModel(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsModel(this.vfsFieldModelKey)
      : null;
  },
  getVfsFieldModelValid(uiSchema) {
    // TODO: Do validation

    // const validations = this.getVfsFieldModelValidation(uiSchema.model)
    return true;
  },
  getVfsFieldModelValidation(key) {
    // TODO: Get and test validation

    return [];
  },
  getVfsFieldModelValidationErrors(key) {
    const errors = [];
    return errors;
  },
  getVfsFieldUiSchema(key) {
    return this.getVfsUiSchema(key);
  },
  getVfsFieldUiSchemaValid(uiSchema) {
    return (
      this.getVfsFieldUiSchemaValidationErrors(uiSchema).length === 0 &&
      uiSchema.children.every(this.getVfsFieldUiSchemaValid)
    );
  },
  getVfsFieldUiSchemaValidationErrors({ component, model, type }) {
    const errors = [];

    if (!component && !this.getVfsFieldComponent(type)) {
      errors.push(`Unknown component type: ${type}`);
    }

    if (model && !(String(model) === model)) {
      errors.push('The field\'s "model" property must be a string!');
    }

    return errors;
  },
  getVfsModel(key) {
    if (key) {
      return get(this.vfsModel, key);
    }

    return this.vfsModel;
  },
  getVfsUiSchema(key) {
    if (key) {
      return get(this.vfsUiSchema, key);
    }

    return this.vfsUiSchema;
  },
  getVfsValidationErrors() {
    return this.vfsUiSchema.map(this.getVfsFieldModelValidationErrors);
  },
};

export default vfsMethodsGettersMixin;
