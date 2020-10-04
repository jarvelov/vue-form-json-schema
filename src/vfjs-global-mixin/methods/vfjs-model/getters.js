import { get } from 'lodash';

const vfjsModelGetters = {
  getVfjsFieldValueModel(key) {
    if (typeof key === 'string') {
      return this.getVfjsFieldModel(key);
    }

    if (key === true) {
      return this.getVfjsModel();
    }

    return undefined;
  },
  getVfjsFieldModel(key) {
    if (key) {
      return this.getVfjsModel(key);
    }

    return this.vfjsFieldModelKey
      ? this.getVfjsModel(this.vfjsFieldModelKey)
      : null;
  },
  getVfjsModel(key) {
    if (!key || key === true) {
      return this.vfjsModel;
    }

    return get(this.vfjsModel, key);
  },
};

export default vfjsModelGetters;
