import { VFJS_EVENT_FIELD_MODEL_UPDATE } from '../../../constants';

function setVfjsFieldModel(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value,
  });
}

export default setVfjsFieldModel;
