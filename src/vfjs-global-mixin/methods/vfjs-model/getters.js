import { get } from 'lodash';

const vfjsModelGetters = {
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
