const vfsValidationGetters = {
  getVfsFieldUiSchemaValidationErrors({ component, model, type }) {
    const errors = [];

    if (!component && !this.getVfsFieldComponent(type)) {
      errors.push(`Unregistered component type: ${type}`);
    }

    if (model && !(String(model) === model)) {
      errors.push('The field\'s "model" property must be a string!');
    }

    return errors;
  },
  getVfsFieldUiSchemaValid(uiSchema) {
    return (
      this.getVfsFieldUiSchemaValidationErrors(uiSchema).length === 0 &&
      uiSchema.children.every(this.getVfsFieldUiSchemaValid)
    );
  },
  getVfsFieldModelValid(key, value) {
    const errors = this.getVfsFieldModelValidationErrors(key, value);
    return errors.length === 0;
  },
  getVfsFieldModelValidationErrors(key, value) {
    return this.getVfsModelValidationErrors(key, value);
  },
  getVfsModelValidationErrors(key, value) {
    const schema = key ? this.getVfsFieldSchema(key) : this.getVfsSchema();
    if (!schema) {
      return [];
    }

    const data = typeof value !== 'undefined' ? value : this.getVfsFieldModel(key);
    const valid = this.ajv.validate(schema, data);

    return (data && !valid) ? this.ajv.errors : [];
  },
  getVfsValid() {
    const errors = this.getVfsValidationErrors();
    return errors.length === 0;
  },
  getVfsValidationErrors(model) {
    const valid = this.ajv.validate(this.getVfsSchema(), model || this.getVfsModel());
    return (!valid) ? this.ajv.errors : [];
  },
};

export default vfsValidationGetters;
