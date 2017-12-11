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
    if (key) {
      return get(this.vfjsModel, key);
    }

    return this.vfjsModel;
  },
};

export default vfjsModelGetters;
