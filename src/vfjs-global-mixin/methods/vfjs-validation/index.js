import Ajv from 'ajv';
import getters from './getters';
import setters from './setters';
import { VFJS_EVENT_MODEL_VALIDATE } from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    const { ajv = {} } = this.vfjsOptions;
    const { options = {}, keywords = {} } = ajv;

    // Set up Ajv
    this.ajv = new Ajv({
      ...options,
      // The `allErrors` option is required for validation to work
      allErrors: true,
    });

    // Allow Ajv to be extended by other functions
    // such as ajv-merge-patch, ajv-async etc.
    Object.keys(keywords).forEach((key) => {
      if (typeof keywords[key] === 'function') {
        keywords[key](this.ajv);
      }
    });

    // Add custom keywords
    Object.keys(keywords).forEach((key) => {
      this.ajv.addKeyword(key, keywords[key]);
    });

    // Add additional schemas
    Object.keys(this.schemas).forEach((key) => {
      this.ajv.addSchema(this.schemas[key], key);
    });

    // TODO: Move this to a method so we can call it when the schema/ui-schema/model is updated

    // This is somewhat of a hack...
    //
    // To find out if a property is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    this.ajv.validate(this.getVfjsSchema(), {});

    if (this.ajv.errors) {
      const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
      this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
    }

    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, { vfjsModel: this.getVfjsModel() });
    }
  },
  ...getters,
  ...setters,
};

export default vfjsValidation;
