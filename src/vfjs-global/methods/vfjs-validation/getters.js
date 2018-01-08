import { get, set } from 'lodash';

const vfjsValidationGetters = {
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
    const valueObj = {};
    set(valueObj, key, value);
    this.ajv.validate(schema, valueObj);

    if (this.ajv.errors) {
      return this.ajv.errors.reduce((errors, error) => {
        const property = get(error, 'params.missingProperty');
        const path = error.dataPath ? error.dataPath.substr(1) : '';
        const propertyPath = path ? `${path}.${property}` : property;

        if (key === propertyPath || key === path) {
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
