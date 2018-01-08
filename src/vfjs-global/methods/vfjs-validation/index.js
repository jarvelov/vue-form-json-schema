import Ajv from 'ajv';
import getters from './getters';
import {
  VFJS_EVENT_MODEL_VALIDATE,
} from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    // Set up Ajv
    this.ajv = new Ajv({
      ...this.vfjsOptions.ajvOptions,
      // The `allErrors` option is required for validation to work
      allErrors: true,
    });

    // Add additional schemas
    Object.keys(this.schemas).forEach((key) => {
      this.ajv.addSchema(this.schemas[key], key);
    });

    // TODO: Move this to a method so we can call it when the schema/ui-schema/model is updated

    // This is somewhat of a hack...
    //
    // To find out if a field is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    this.ajv.validate(this.getVfjsSchema(), {});

    this.vfjsFieldsRequired = this.ajv.errors
      ? this.ajv.errors.reduce((required, error) => {
        if (error.keyword === 'required') {
          if (error.params && error.params.missingProperty) {
            const key = error.params.missingProperty;
            const parent = String(error.dataPath).substr(1);

            const propertyPath = parent ? `${parent}.${key}` : key;

            if (required.indexOf(propertyPath) === -1) {
              required.push(propertyPath);
            }
          }
        }

        return required;
      }, [])
      : [];


    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, { vfjsModel: this.getVfjsModel() });
    }
  },
  ...getters,
};

export default vfjsValidation;
