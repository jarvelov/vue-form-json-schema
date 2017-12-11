import {
  Vfjs_EVENT_FIELD_MODEL_UPDATE,
  Vfjs_EVENT_FIELD_STATE_UPDATE,
} from '../../constants';

const setters = {
  setVfjsFieldState(value, key) {
    this.vfjsBus.$emit(Vfjs_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfjsFieldModelKey,
      value,
    });
  },
  setVfjsFieldModel(value, key) {
    return new Promise((resolve, reject) => {
      this.vfjsBus.$emit(Vfjs_EVENT_FIELD_MODEL_UPDATE, {
        key: key || this.vfjsFieldModelKey,
        value,
        cb: (errors) => {
          if (errors && errors.length > 0) {
            reject(errors);
          }

          resolve();
        },
      });
    });
  },
};

export default setters;
