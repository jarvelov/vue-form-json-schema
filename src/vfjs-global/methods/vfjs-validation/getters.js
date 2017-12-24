import { get } from 'lodash';

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
    const schema = this.getVfjsSchema();

    // TODO: Globally get all the errors and reduce them instead of generating them again
    this.ajv.validate(schema, {
      [key]: value,
    });

    if (this.ajv.errors) {
      return this.ajv.errors.reduce((errors, error) => {
        const errorKey = get(error, 'params.missingProperty');
        if (key === errorKey) {
          errors.push(error);
        }

        return errors;
      }, []);
    }

    return []; // No errors
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
