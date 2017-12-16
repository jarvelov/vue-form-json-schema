const vfjsValidationGetters = {
  getVfjsFieldUiSchemaValidationErrors({ component, model, type }) {
    const errors = [];

    if (!component && !this.getVfjsFieldComponent(type)) {
      errors.push(`Unregistered component type: ${type}`);
    }

    if (model && !(String(model) === model)) {
      errors.push('The field\'s "model" property must be a string!');
    }

    return errors;
  },
  getVfjsFieldUiSchemaValid(uiSchema) {
    return (
      this.getVfjsFieldUiSchemaValidationErrors(uiSchema).length === 0 &&
      uiSchema.children.every(this.getVfjsFieldUiSchemaValid)
    );
  },
  getVfjsFieldModelValid(key, value) {
    const errors = this.getVfjsFieldModelValidationErrors(key, value);
    return errors.length === 0;
  },
  getVfjsFieldModelValidationErrors(key, value) {
    return this.getVfjsModelValidationErrors(key, value);
  },
  getVfjsModelValidationErrors(key, value) {
    const schema = key ? this.getVfjsFieldSchema(key) : this.getVfjsSchema();
    if (!schema) {
      return [];
    }

    const data = typeof value !== 'undefined' ? value : this.getVfjsFieldModel(key);
    const valid = this.ajv.validate(schema, data);

    return !valid ? this.ajv.errors : [];
  },
  getVfjsValid() {
    const errors = this.getVfjsValidationErrors();
    return errors.length === 0;
  },
  getVfjsValidationErrors(model) {
    const valid = this.ajv.validate(this.getVfjsSchema(), model || this.getVfjsModel());
    return (!valid) ? this.ajv.errors : [];
  },
};

export default vfjsValidationGetters;
