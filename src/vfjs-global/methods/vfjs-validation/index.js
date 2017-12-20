import Ajv from 'ajv';
import getters from './getters';
import {
  VFJS_EVENT_MODEL_VALIDATE,
} from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    this.ajv = new Ajv(this.vfjsOptions.ajvOptions);

    // Add additional schemas
    Object.keys(this.schemas).forEach((key) => {
      this.ajv.addSchema(this.schemas[key], key);
    });

    // This is somewhat of a hack...
    //
    // To find out if a field is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    // console.log(this.vfjsSchema, this.getVfjsSchema());
    this.ajv.validate(this.getVfjsSchema(), {});

    this.vfjsFieldsRequired = this.ajv.errors
      ? this.ajv.errors.reduce((required, error) => {
        if (error.keyword === 'required') {
          if (error.params && error.params.missingProperty) {
            if (required.indexOf(error.params.missingProperty) === -1) {
              required.push(error.params.missingProperty);
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
