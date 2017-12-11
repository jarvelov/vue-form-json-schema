import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_STATE_UPDATE,
} from '../../constants';

const setters = {
  setVfsFieldState(value, key) {
    this.vfsBus.$emit(VFS_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfsFieldModelKey,
      value,
    });
  },
  setVfsFieldModel(value, key) {
    return new Promise((resolve, reject) => {
      this.vfsBus.$emit(VFS_EVENT_FIELD_MODEL_UPDATE, {
        key: key || this.vfsFieldModelKey,
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
