import {
  VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
  VFJS_EVENT_UI_FIELDS_UPDATE,
  VFJS_EXTERNAL_EVENT_CHANGE,
} from '../../../../constants';

function vfjsEventModelUpdated() {
  this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);

  // Clear hidden fields
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN);

  this.$emit(VFJS_EXTERNAL_EVENT_CHANGE, this.getVfjsModel());
}

export default vfjsEventModelUpdated;
