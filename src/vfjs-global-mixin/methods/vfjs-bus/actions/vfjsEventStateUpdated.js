import {
  VFJS_EXTERNAL_EVENT_STATE_CHANGE,
  VFJS_EXTERNAL_EVENT_VALIDATED,
} from '../../../../constants';

function vfjsEventStateUpdated({ cb }) {
  const vfjsState = {
    vfjsErrors: [],
    vfjsFieldsActive: this.vfjsFieldsActive,
    vfjsFieldsActiveModels: this.vfjsFieldsActiveModels,
    ...this.getVfjsState(),
  };

  this.$emit(VFJS_EXTERNAL_EVENT_STATE_CHANGE, vfjsState);
  this.$emit(VFJS_EXTERNAL_EVENT_VALIDATED, vfjsState.vfjsErrors.length === 0);

  if (cb && typeof cb === 'function') {
    cb();
  }
}

export default vfjsEventStateUpdated;
