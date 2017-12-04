import { set } from 'lodash';
import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
} from '../../constants';

const vfsMethodsSettersMixin = {
  setVfsModel(newModel) {
    this.vfsState.errors = this.getVfsModelValidationErrors();
    this.vfsModel = Object.assign({}, this.vfsModel, newModel);
    this.vfsBus.$emit(VFS_EVENT_MODEL_UPDATED, this.vfsModel);
  },
  setVfsUiFieldsActive() {
    this.vfsFieldsActive = this.vfsUiSchema.reduce((fields, uiSchemaField) => ([
      ...fields,
      this.getVfsUiFieldActive(uiSchemaField),
    ]), []);
  },
  setVfsFieldState(value, key) {
    const model = key || this.vfsFieldModelKey;
    const newVfsState = Object.assign({}, this.vfsState);
    set(newVfsState, model, value);
    this.setVfsState(newVfsState);
  },
  setVfsState(state) {
    this.vfsState = Object.assign({}, this.vfsState, state);
  },
  setVfsFieldModel(value, key) {
    const model = key || this.vfsFieldModelKey;
    if (!model) {
      throw new Error('Could not determine model key and no key argument was submitted');
    }

    // TODO: Add option to disable validation
    // if (this.vfsOptions.validate) {}

    this.vfsBus.$emit(VFS_EVENT_FIELD_MODEL_UPDATE, {
      key: model,
      value,
    });
  },
};

export default vfsMethodsSettersMixin;
