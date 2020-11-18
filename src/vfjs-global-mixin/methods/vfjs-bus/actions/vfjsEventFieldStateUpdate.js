import { VFJS_EVENT_STATE_UPDATE } from '../../../constants';

function vfjsEventFieldStateUpdate({ key, value, cb }) {
  const newVfjsState = { ...this.getVfjsState(), [key]: value };

  this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
    value: newVfjsState,
    cb,
  });
}

export default vfjsEventFieldStateUpdate;
