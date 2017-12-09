import Ajv from 'ajv';
import { set } from 'lodash';
import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_MODEL_VALIDATE,
  VFS_EVENT_FIELD_STATE_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_MODEL_VALIDATE,
  VFS_EVENT_STATE_UPDATED,
  VFS_EXTERNAL_EVENT_CHANGE,
  VFS_EXTERNAL_EVENT_STATE_CHANGE,
} from '../constants';

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

    // Register events in vfsEvents to vfsBusEventHandler
    this.addVfsListeners(this.vfsEvents, this.vfsBusEventHandler);

    // Check if validation is enabled and set to run on load
    if (this.vfsOptions.validate && this.vfsOptions.validateOnLoad) {
      this.vfsBus.emit(VFS_EVENT_MODEL_VALIDATE);
    }

    // Check and set active fields (visible)
    this.setVfsUiFieldsActive();
  },
  vfsBusEventHandler(event, payload) {
    const eventActions = {
      [VFS_EVENT_FIELD_MODEL_VALIDATE]: ({ key, value, cb }) => {
        const vfsModel = this.vfsHelperApplyFieldModel(key, value);

        this.vfsBus.emit(VFS_EVENT_MODEL_VALIDATE, {
          vfsModel,
          cb: (vfsErrors) => {
            const vfsFieldErrors = this.getVfsFieldModelValidationErrors(key, value);
            const newState = Object.assign({}, this.getVfsFieldState(key), {
              vfsFieldErrors,
            });

            this.setVfsFieldState(newState, key);

            if (cb && typeof cb === 'function') {
              cb(vfsFieldErrors);
            }
          },
        });
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

            const newModel = this.vfsHelperApplyFieldModel(key, value);
            this.setVfsModel(newModel);

            if (cb && typeof cb === 'function') {
              cb(errors);
            }
          },
        });
      },
      [VFS_EVENT_FIELD_STATE_UPDATE]: ({ key, value }) => {
        const newVfsState = Object.assign({}, this.getVfsState());
        set(newVfsState, key, value);
        this.setVfsState(newVfsState);
      },
      [VFS_EVENT_MODEL_VALIDATE]: ({ vfsModel, cb }) => {
        const vfsErrors = this.getVfsValidationErrors(vfsModel);
        const newState = Object.assign({}, this.getVfsState(), {
          vfsErrors,
        });
        this.setVfsState(newState);

        if (cb && typeof cb === 'function') {
          cb(vfsErrors);
        }
      },
      [VFS_EVENT_MODEL_UPDATED]: () => {
        this.setVfsUiFieldsActive();
        this.$emit(VFS_EXTERNAL_EVENT_CHANGE, this.getVfsModel());
      },
      [VFS_EVENT_STATE_UPDATED]: () => {
        this.$emit(VFS_EXTERNAL_EVENT_STATE_CHANGE, this.getVfsState());
      },
    };

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
};

export default methods;
