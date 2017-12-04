import Ajv from 'ajv';
import { set } from 'lodash';
import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_FIELD_MODEL_VALIDATE,
  VFS_EVENT_MODEL_UPDATED,
  VFS_EVENT_MODEL_VALIDATE,
  VFS_EXTERNAL_EVENT_CHANGE,
} from '../../constants';

const methods = {
  vfsDestroy() {
    this.vfsEvents.forEach(event => this.removeVfsListener(event));
  },
  vfsInitialize() {
    this.ajv = new Ajv();

    this.setVfsModel(this.model);
    this.vfsComponents = Object.assign({}, this.components);
    this.vfsSchema = Object.assign({}, this.schema);
    this.vfsUiSchema = this.uiSchema.slice(0);
    this.vfsOptions = Object.assign({}, this.options);

    this.setVfsSetListeners(this.vfsEvents);

    if (this.vfsOptions.validate && this.vfsOptions.validateOnLoad) {
      this.vfsBus.$emit(VFS_EVENT_MODEL_VALIDATE);
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
        this.vfsBus.$emit(VFS_EVENT_FIELD_MODEL_VALIDATE, {
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
              cb();
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
    };

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
};

export default methods;
