import getters from './getters';
import helpers from './helpers';
import setters from './setters';

const methods = {
  ...getters,
  ...helpers,
  ...setters,
};

export default methods;
