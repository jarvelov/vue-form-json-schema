import * as getters from './getters';
import * as setters from './setters';
import vfjsValidationInitialize from './vfjsValidationInitialize';

const vfjsValidation = {
  vfjsValidationInitialize,
  ...getters,
  ...setters,
};

export default vfjsValidation;
