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
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    // Save timestamp and make sure that there was at least 150 ms between each update
    // If there was more than 150ms since last update set delay to 0
    const timestamp = Date.now();
    const diff = this.vfjsFieldState.updatedAt ? (timestamp - this.vfjsFieldState.updatedAt) : 0;
    const delay = this.vfjsFieldState.updatedAt
      ? Math.min(diff, 150)
      : 0;

    this.timeout = setTimeout(() => {
      this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
        key: key || this.vfjsFieldModelKey,
        value,
      });
    }, delay);
  },
};

export default setters;
