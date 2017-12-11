import { get } from 'lodash';

const vfsStateGetters = {
  getVfsState(key) {
    if (key) {
      return get(this.vfsState, key);
    }

    return this.vfsState;
  },
  getVfsFieldState(key) {
    if (key) {
      return this.getVfsState(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsState(this.vfsFieldModelKey)
      : null;
  },
};

export default vfsStateGetters;
