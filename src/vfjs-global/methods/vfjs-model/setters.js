import {
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_MODEL_UPDATED,
} from '../../../constants';

const vfjsModelSetters = {
  setVfjsFieldModel(value, key) {
    this.vfjsBus.emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
  setVfjsModel(model) {
    this.vfjsModel = Object.assign({}, this.getVfjsModel(), model);
    this.vfjsBus.emit(VFJS_EVENT_MODEL_UPDATED, this.getVfjsModel());
  },
};

export default vfjsModelSetters;
