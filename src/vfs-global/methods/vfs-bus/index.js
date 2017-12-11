import Vue from 'vue';
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
} from '../../../constants';

const vfsBus = {
  addVfsListener(event, callback) {
    const listener = this.vfsBus.$on(event, value => callback(event, value));
    this.vfsListeners.push(listener);
  },
  addVfsListeners(events = [], callback) {
    events.forEach(event => this.addVfsListener(event, callback));
  },
  removeVfsListener(event) {
    this.vfsBus.$off(event);
  },
  removeVfsListeners(events = []) {
    events.forEach(this.removeVfsListener);
  },
  removeVfsListenersAll() {
    this.vfsBus.$off();
    this.vfsListeners = [];
  },
  vfsBusEventHandler(event, payload) {
    const eventActions = {
      [VFS_EVENT_FIELD_MODEL_VALIDATE]: ({ key, value, cb }) => {
        const vfsModel = this.vfsHelperApplyFieldModel(key, value);

        this.vfsBus.$emit(VFS_EVENT_MODEL_VALIDATE, {
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
        this.vfsBus.$emit(VFS_EVENT_FIELD_MODEL_VALIDATE, {
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
  vfsBusInitialize() {
    this.vfsBus = new Vue();
  },
};

export default vfsBus;
