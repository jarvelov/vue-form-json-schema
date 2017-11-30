import { get } from 'lodash';

const vfsMethodsGettersMixin = {
  getVfsField(schema) {
    const {
      children = [],
      component,
      model = '',
      type,
      fieldOptions,
      ...options
    } = schema;

    return {
      Component: component || this.getVfsFieldComponent(type),
      children: children.map(this.getVfsField),
      props: {
        ...options,
        ...fieldOptions,
        vfsFieldModelKey: model,
        vfsFieldSchema: schema,
        value: this.getVfsModel(model),
      },
    };
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
  getVfsFieldModelValid(schema) {
    // TODO: Do validation

    // const validations = this.getVfsFieldModelValidation(schema.model)
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
  getVfsFieldSchema(key) {
    return this.getVfsSchema(key);
  },
  getVfsFieldSchemaValid(schema) {
    return (
      this.getVfsFieldSchemaValidationErrors(schema).length === 0 &&
      schema.children.every(this.getVfsFieldSchemaValid)
    );
  },
  getVfsFieldSchemaValidationErrors({ component, model, type }) {
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
  getVfsSchema(key) {
    if (key) {
      return get(this.vfsSchema, key);
    }

    return this.vfsSchema;
  },
  getVfsValidationErrors() {
    return this.vfsSchema.map(this.getVfsFieldModelValidationErrors);
  },
};

export default vfsMethodsGettersMixin;
