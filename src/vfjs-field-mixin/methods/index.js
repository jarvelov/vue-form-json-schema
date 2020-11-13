import * as getters from './getters';
import * as helpers from './helpers';
import * as setters from './setters';

const methods = {
  ...getters,
  ...helpers,
  ...setters,
};

export default methods;
