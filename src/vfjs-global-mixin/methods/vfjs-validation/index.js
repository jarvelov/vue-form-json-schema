import Ajv from 'ajv';
import getters from './getters';
import setters from './setters';
import { VFJS_EVENT_MODEL_VALIDATE } from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    const { ajv = {} } = this.vfjsOptions;
    const { options = {}, keywords = {}, plugins = {} } = ajv;

    // Set up Ajv
    this.ajv = new Ajv({
      ...options,
      // The `allErrors` option is required for validation to work
      allErrors: true,
    });

    // Allow Ajv to be extended by other functions
    // such as ajv-merge-patch, ajv-async etc.
    Object.keys(plugins).forEach((name) => {
      if (typeof plugins[name] === 'function') {
        plugins[name](this.ajv);
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

    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.emit(VFJS_EVENT_MODEL_VALIDATE, { vfjsModel: this.getVfjsModel() });
    }
  },
  ...getters,
  ...setters,
};

export default vfjsValidation;
