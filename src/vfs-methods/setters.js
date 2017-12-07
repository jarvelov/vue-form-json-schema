import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_STATE_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_STATE_UPDATED,
} from 'vue-form-json-schema-constants';

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
    this.vfsModel = Object.assign({}, this.vfsModel, model);
    this.vfsBus.emit(VFS_EVENT_MODEL_UPDATED, this.vfsModel);
  },
  setVfsState(state) {
    this.vfsState = Object.assign({}, this.vfsState, state);
    this.vfsBus.emit(VFS_EVENT_STATE_UPDATED);
  },
  setVfsUiFieldsActive() {
    this.vfsFieldsActive = this.vfsUiSchema.reduce((fields, uiSchemaField) => ([
      ...fields,
      this.getVfsUiFieldActive(uiSchemaField),
    ]), []);
  },
};

export default vfsMethodsSettersMixin;
