import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_STATE_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_STATE_UPDATED,
} from '../constants';

const vfsMethodsSettersMixin = {
  setVfsFieldState(value, key) {
    this.vfsBus.emit(VFS_EVENT_FIELD_STATE_UPDATE, {
      key: key || this.vfsFieldModelKey,
      value,
    });
  },
  setVfsFieldModel(value, key) {
    return new Promise((resolve, reject) => {
      this.vfsBus.emit(VFS_EVENT_FIELD_MODEL_UPDATE, {
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
    this.vfsBus.emit(VFS_EVENT_MODEL_UPDATED, this.getVfsModel());
  },
  setVfsState(state) {
    this.vfsState = Object.assign({}, this.getVfsState(), state);
    this.vfsBus.emit(VFS_EVENT_STATE_UPDATED);
  },
  setVfsUiFieldsActive() {
    this.vfsFieldsActive = this.vfsUiSchema.reduce((fields, field) => ([
      ...fields,
      this.getVfsUiFieldActive(field),
    ]), []);
  },
};

export default vfsMethodsSettersMixin;
