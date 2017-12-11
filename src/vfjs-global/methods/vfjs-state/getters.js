import { get } from 'lodash';

const vfjsStateGetters = {
  getVfjsState(key) {
    if (key) {
      return get(this.vfjsState, key);
    }

    return this.vfjsState;
  },
  getVfjsFieldState(key) {
    if (key) {
      return this.getVfjsState(key);
    }

    return this.vfjsFieldModelKey
      ? this.getVfjsState(this.vfjsFieldModelKey)
      : null;
  },
};

export default vfjsStateGetters;
