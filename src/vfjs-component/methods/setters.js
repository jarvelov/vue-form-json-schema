import {
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
} from '../../constants';

const setters = {
  setState(value) {
    this.setVfjsFieldState(value);
  },
  setModel(value) {
    this.setVfjsFieldModel(value);
  },
  setVfjsFieldState(value, key) {
    this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
  setVfjsFieldModel(value, key) {
    this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
};

export default setters;
