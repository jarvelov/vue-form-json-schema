import Ajv from 'ajv';
import { set } from 'lodash';
import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_MODEL_VALIDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_MODEL_VALIDATE,
  VFS_EVENT_STATE_UPDATED,
  VFS_EXTERNAL_EVENT_CHANGE,
  VFS_EXTERNAL_EVENT_STATE_CHANGE,
} from 'vue-form-json-schema-constants';

const methods = {
  vfsDestroy() {
    this.vfsEvents.forEach(event => this.removeVfsListener(event));
  },
  vfsInitialize() {
    this.ajv = new Ajv();

    this.setVfsModel(this.model);
    this.vfsComponents = Object.assign({}, this.components);
    this.vfsSchema = Object.assign({}, this.schema);
    this.vfsUiSchema = [...this.uiSchema];
    this.vfsOptions = Object.assign({}, this.options);

    this.addVfsListeners(this.vfsEvents, this.vfsBusEventHandler);

    if (this.vfsOptions.validate && this.vfsOptions.validateOnLoad) {
      this.vfsBus.emit(VFS_EVENT_MODEL_VALIDATE);
    }

    this.setVfsUiFieldsActive();
  },
  vfsBusEventHandler(event, payload) {
    const eventActions = {
      [VFS_EVENT_FIELD_MODEL_VALIDATE]: ({ key, value, cb }) => {
        const errors = this.getVfsFieldModelValidationErrors(key, value);
        const state = this.getVfsFieldState(key);
        const newState = Object.assign({}, state, {
          errors,
        });

        this.setVfsFieldState(newState, key);

        if (cb && typeof cb === 'function') {
          cb(errors);
        }
      },
      [VFS_EVENT_FIELD_MODEL_UPDATE]: ({ key, value, cb }) => {
        this.vfsBus.emit(VFS_EVENT_FIELD_MODEL_VALIDATE, {
          key,
          value,
          cb: (errors) => {
            // TODO: Allow to skip updating value if not valid
            // if (!this.vfsOptions.allowInvalid) {
            //   return cb(errors);
            // }

            const newModel = Object.assign({}, this.vfsModel);
            set(newModel, key, value);
            this.setVfsModel(newModel);

            if (cb && typeof cb === 'function') {
              cb(errors);
            }
          },
        });
      },
      [VFS_EVENT_MODEL_VALIDATE]: ({ key, value }) => {

      },
      [VFS_EVENT_MODEL_UPDATED]: () => {
        this.setVfsUiFieldsActive();
        this.$emit(VFS_EXTERNAL_EVENT_CHANGE, this.vfsModel);
      },
      [VFS_EVENT_STATE_UPDATED]: (value) => {
        this.vfsState = Object.assign({}, this.vfsState, value);
        this.$emit(VFS_EXTERNAL_EVENT_STATE_CHANGE, this.vfsState);
      },
    };

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
};

export default methods;
