import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
} from '../../../constants';

const vfsModelSetters = {
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
  setVfsModel(model) {
    this.vfsModel = Object.assign({}, this.getVfsModel(), model);
    this.vfsBus.$emit(VFS_EVENT_MODEL_UPDATED, this.getVfsModel());
  },
};

export default vfsModelSetters;
