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

const vfjsBus = {
  addVfjsListener(event, callback) {
    const listener = this.vfjsBus.$on(event, value => callback(event, value));
    this.vfjsListeners.push(listener);
  },
  addVfjsListeners(events = [], callback) {
    events.forEach(event => this.addVfjsListener(event, callback));
  },
  removeVfjsListener(event) {
    this.vfjsBus.$off(event);
  },
  removeVfjsListeners(events = []) {
    events.forEach(this.removeVfjsListener);
  },
  removeVfjsListenersAll() {
    this.vfjsBus.$off();
    this.vfjsListeners = [];
  },
  vfjsBusEventHandler(event, payload) {
    const eventActions = {
      [VFS_EVENT_FIELD_MODEL_VALIDATE]: ({ key, value, cb }) => {
        const vfjsModel = this.vfjsHelperApplyFieldModel(key, value);

        this.vfjsBus.$emit(VFS_EVENT_MODEL_VALIDATE, {
          vfjsModel,
          cb: (vfjsErrors) => {
            const vfjsFieldErrors = this.getVfjsFieldModelValidationErrors(key, value);
            const newState = Object.assign({}, this.getVfjsFieldState(key), {
              vfjsFieldErrors,
            });

            this.setVfjsFieldState(newState, key);

            if (cb && typeof cb === 'function') {
              cb(vfjsFieldErrors);
            }
          },
        });
      },
      [VFS_EVENT_FIELD_MODEL_UPDATE]: ({ key, value, cb }) => {
        this.vfjsBus.$emit(VFS_EVENT_FIELD_MODEL_VALIDATE, {
          key,
          value,
          cb: (errors) => {
            // TODO: Allow to skip updating value if not valid
            // if (!this.vfjsOptions.allowInvalid) {
            //   return cb(errors);
            // }

            const newModel = this.vfjsHelperApplyFieldModel(key, value);
            this.setVfjsModel(newModel);

            if (cb && typeof cb === 'function') {
              cb(errors);
            }
          },
        });
      },
      [VFS_EVENT_FIELD_STATE_UPDATE]: ({ key, value }) => {
        const newVfjsState = Object.assign({}, this.getVfjsState());
        set(newVfjsState, key, value);
        this.setVfjsState(newVfjsState);
      },
      [VFS_EVENT_MODEL_VALIDATE]: ({ vfjsModel, cb }) => {
        const vfjsErrors = this.getVfjsValidationErrors(vfjsModel);
        const newState = Object.assign({}, this.getVfjsState(), {
          vfjsErrors,
        });
        this.setVfjsState(newState);

        if (cb && typeof cb === 'function') {
          cb(vfjsErrors);
        }
      },
      [VFS_EVENT_MODEL_UPDATED]: () => {
        this.setVfjsUiFieldsActive();
        this.$emit(VFS_EXTERNAL_EVENT_CHANGE, this.getVfjsModel());
      },
      [VFS_EVENT_STATE_UPDATED]: () => {
        this.$emit(VFS_EXTERNAL_EVENT_STATE_CHANGE, this.getVfjsState());
      },
    };

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
  vfjsBusInitialize() {
    this.vfjsBus = new Vue();
  },
};

export default vfjsBus;
