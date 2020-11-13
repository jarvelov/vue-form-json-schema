import { VFJS_EVENT_FIELD_STATE_UPDATE } from '../../../constants';

function setVfjsFieldState(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value,
  });
}

export default setVfjsFieldState;
