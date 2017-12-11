import Ajv from 'ajv';
import getters from './getters';
import {
  VFS_EVENT_MODEL_VALIDATE,
} from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    this.ajv = new Ajv();

    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.$emit(VFS_EVENT_MODEL_VALIDATE);
    }
  },
  ...getters,
};

export default vfjsValidation;
