import Vue from 'vue';
import Ajv from 'ajv';
import {
  VFS_EVENT_MODEL_UPDATED,
  VFS_EXTERNAL_EVENT_CHANGE,
} from '../../constants';

const methods = {
  vfsInitialize() {
    this.vfsBus = new Vue();
    this.vfsComponents = Object.assign({}, this.components);
    this.vfsSchema = Object.assign({}, this.schema);
    this.vfsModel = Object.assign({}, this.model);
    this.vfsUiSchema = this.uiSchema.slice(0);
    this.ajv = new Ajv();

    this.vfsCompileSchema(this.vfsSchema);
    this.setVfsSetListeners(this.vfsEvents);
  },
  vfsCompileSchema(schema) {
    this.vfsValidator = this.ajv.compile(schema);
  },
  vfsBusEventHandler(event, value) {
    if (event === VFS_EVENT_MODEL_UPDATED) {
      this.$emit(VFS_EXTERNAL_EVENT_CHANGE, value);
    }
  },
};

export default methods;
