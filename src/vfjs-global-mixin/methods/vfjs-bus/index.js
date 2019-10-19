import Minibus from 'minibus';
import { isEqual, set } from 'lodash';
import {
  VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_UPDATED,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
  VFJS_EVENT_UI_FIELDS_UPDATE,
  VFJS_EXTERNAL_EVENT_CHANGE,
  VFJS_EXTERNAL_EVENT_STATE_CHANGE,
  VFJS_EXTERNAL_EVENT_VALIDATED,
} from '../../../constants';

const vfjsBus = {
  addVfjsListener(event, callback) {
    this.vfjsBus.on(event, value => callback(event, value));
  },
  addVfjsListeners(events = [], callback) {
    events.forEach(event => this.addVfjsListener(event, callback));
  },
  removeVfjsListener(event) {
    this.vfjsBus.off(event);
  },
  removeVfjsListeners(events = []) {
    events.forEach(this.removeVfjsListener);
  },
  removeVfjsListenersAll() {
    this.vfjsBus.off();
  },
  vfjsBusEventHandler(event, payload) {
    const eventActions = {
      [VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN]: () => {
        const allModels = this.vfjsHelperGetFieldsWithClearOnHide(this.uiSchema);
        const activeModels = this.vfjsHelperGetFieldsWithClearOnHide(this.vfjsFieldsActive);

        const inactiveModels = Object.keys(allModels).reduce((models, key) => {
          if (!(key in activeModels)) {
            // eslint-disable-next-line no-param-reassign
            models[key] = allModels[key];
          }

          return models;
        }, {});

        Object.keys(inactiveModels).forEach((key) => {
          const clearModels = inactiveModels[key];
          if (Array.isArray(clearModels)) {
            clearModels.forEach((clearModel) => {
              const newModel = this.vfjsHelperApplyFieldModel(
                typeof clearModel === 'string' ? clearModel : key,
                undefined,
              );
              this.setVfjsModel(newModel, true);
            });
          } else {
            const newModel = this.vfjsHelperApplyFieldModel(
              typeof clearModels === 'string' ? clearModels : key,
              undefined,
            );
            this.setVfjsModel(newModel, true);
          }
        });
      },
      [VFJS_EVENT_FIELD_MODEL_VALIDATE]: ({ key, value, cb }) => {
        const vfjsModel = this.vfjsHelperApplyFieldModel(key, value);

        this.vfjsBus.emit(VFJS_EVENT_MODEL_VALIDATE, {
          vfjsModel,
          cb: () => {
            const model = {};
            set(model, key, value);

            const schema = this.getVfjsValidationSchema(key, value);
            const errors = this.getVfjsValidationErrors(model, schema);

            if (cb && typeof cb === 'function') {
              cb(errors);
            }
          },
        });
      },
      [VFJS_EVENT_FIELD_MODEL_UPDATE]: ({ key, value: originalValue, cb }) => {
        let value = originalValue;

        const { castToSchemaType = false } = this.vfjsOptions;
        if (castToSchemaType) {
          // Cast model to the type specified in its schema
          value = this.vfjsHelperCastValueToSchemaType(key, value);
        }

        this.vfjsBus.emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
          key,
          value,
          cb: (errors) => {
            const vfjsFieldModel = this.getVfjsFieldModel(key);
            const newFieldState = Object.assign({}, this.getVfjsFieldState(key), {
              vfjsFieldDirty: !isEqual(vfjsFieldModel, value),
              vfjsFieldErrors: errors,
            });

            this.setVfjsFieldState(newFieldState, key);

            if (!errors || (errors && errors.length === 0) || this.vfjsOptions.allowInvalidModel) {
              const newModel = this.vfjsHelperApplyFieldModel(key, value);
              this.setVfjsModel(newModel);
            }

            if (cb && typeof cb === 'function') {
              cb(errors);
            }
          },
        });
      },
      [VFJS_EVENT_FIELD_STATE_UPDATE]: ({ key, value, cb }) => {
        this.vfjsBus.emit(VFJS_EVENT_STATE_UPDATE, {
          key,
          value,
          cb,
        });
      },
      [VFJS_EVENT_MODEL_VALIDATE]: ({ vfjsModel, cb }) => {
        const vfjsErrors = this.getVfjsValidationErrors(vfjsModel);

        this.vfjsBus.emit(VFJS_EVENT_STATE_UPDATE, {
          key: 'vfjsErrors',
          value: vfjsErrors,
          cb: () => {
            const vfjsState = this.getVfjsState();
            this.$emit(VFJS_EXTERNAL_EVENT_VALIDATED, vfjsState.vfjsErrors.length === 0);

            if (cb && typeof cb === 'function') {
              cb(vfjsErrors);
            }
          },
        });
      },
      [VFJS_EVENT_UI_FIELDS_UPDATE]: () => {
        this.setVfjsUiFieldsActive();
      },
      [VFJS_EVENT_MODEL_UPDATED]: () => {
        this.vfjsBus.emit(VFJS_EVENT_UI_FIELDS_UPDATE);

        // Clear hidden fields
        this.vfjsBus.emit(VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN);

        this.$emit(VFJS_EXTERNAL_EVENT_CHANGE, this.getVfjsModel());
      },
      [VFJS_EVENT_STATE_UPDATE]: ({ key, value, cb }) => {
        const newVfjsState = Object.assign({}, this.getVfjsState(), {
          [key]: value,
        });

        this.setVfjsState(newVfjsState);

        if (cb && typeof cb === 'function') {
          cb();
        }
      },
      [VFJS_EVENT_STATE_UPDATED]: (cb) => {
        const vfjsState = {
          vfjsErrors: [],
          vfjsFieldsActive: this.vfjsFieldsActive,
          vfjsFieldsActiveModels: this.vfjsFieldsActiveModels,
          ...this.getVfjsState(),
        };

        this.$emit(VFJS_EXTERNAL_EVENT_STATE_CHANGE, vfjsState);

        if (cb && typeof cb === 'function') {
          cb();
        }
      },
    };

    if (event && event in eventActions) {
      eventActions[event](payload);
    }
  },
  vfjsBusInitialize() {
    this.vfjsBus = Minibus.create();
  },
};

export default vfjsBus;
