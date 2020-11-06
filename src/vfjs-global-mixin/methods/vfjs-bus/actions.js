import { get, isEqual, set } from 'lodash';
import {
  VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_MODELS_VALIDATE,
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

const vfjsBusEventActions = {
  [VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN]() {
    const allModels = this.vfjsHelperGetFieldsWithClearOnHide(this.uiSchema);
    const activeModels = this.vfjsHelperGetFieldsWithClearOnHide(
      this.vfjsFieldsActive,
    );

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
  [VFJS_EVENT_FIELD_MODEL_VALIDATE]({ key, value, cb }) {
    const model = {};
    set(model, key, value);

    const schema = this.getVfjsValidationSchema(key, value);
    const errors = this.getVfjsValidationErrors(model, schema);

    if (cb && typeof cb === 'function') {
      cb(errors);
    }
  },
  [VFJS_EVENT_FIELD_MODELS_VALIDATE]({ vfjsModel, cb }) {
    const operations = this.vfjsFieldsActiveModels.map((key) => {
      const vfjsFieldModel = get(vfjsModel, key);

      return new Promise((resolve) => {
        this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
          value: vfjsFieldModel,
          key,
          cb: (errors) => {
            const vfjsFieldState = this.getVfjsFieldState(key);

            resolve({
              [key]: {
                ...vfjsFieldState,
                vfjsFieldErrors: errors,
              },
            });
          },
        });
      });
    });

    Promise.all(operations).then((results) => {
      const newVfjsState = results.reduce(
        (vfjsState, vfjsFieldState) => ({
          ...vfjsState,
          ...vfjsFieldState,
        }),
        {},
      );

      if (cb && typeof cb === 'function') {
        cb(newVfjsState);
      }
    });
  },
  [VFJS_EVENT_FIELD_MODEL_UPDATE]({ key, value: originalValue, cb }) {
    let value = originalValue;

    const { castToSchemaType = false } = this.vfjsOptions;
    if (castToSchemaType) {
      // Cast model to the type specified in its schema
      value = this.vfjsHelperCastValueToSchemaType(key, value);
    }

    const vfjsModel = this.vfjsHelperApplyFieldModel(key, value);

    this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel,
      cb: (newVfjsState) => {
        const vfjsFieldModel = this.getVfjsFieldModel(key);
        if (!isEqual(vfjsFieldModel, value)) {
          set(newVfjsState, `${key}.vfjsFieldDirty`, true);
        }

        const vfjsFieldState = get(newVfjsState, `${key}`);
        const { vfjsFieldErrors = [] } = vfjsFieldState;
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
          value: newVfjsState,
          cb: () => {
            if (
              vfjsFieldErrors.length === 0 ||
              this.vfjsOptions.allowInvalidModel
            ) {
              this.setVfjsModel(vfjsModel);
            }

            if (cb && typeof cb === 'function') {
              cb();
            }
          },
        });
      },
    });
  },
  [VFJS_EVENT_FIELD_STATE_UPDATE]({ key, value, cb }) {
    const newVfjsState = { ...this.getVfjsState(), [key]: value };

    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
      value: newVfjsState,
      cb,
    });
  },
  [VFJS_EVENT_MODEL_VALIDATE]({ vfjsModel, cb }) {
    this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODELS_VALIDATE, {
      vfjsModel,
      cb: (vfjsFieldStates) => {
        const vfjsErrors = this.getVfjsValidationErrors(vfjsModel);
        const vfjsFieldErrors = Object.keys(vfjsFieldStates)
          .map((key) => vfjsFieldStates[key])
          .reduce(
            (errors, vfjsFieldState) => [
              ...errors,
              ...vfjsFieldState.vfjsFieldErrors,
            ],
            [],
          );

        const vfjsErrorsFiltered = [...vfjsErrors, ...vfjsFieldErrors].reduce(
          (array, item) => {
            const exists = array.some((arrayItem) => isEqual(item, arrayItem));
            if (!exists) {
              array.push(item);
            }

            return array;
          },
          [],
        );

        const vfjsState = {
          ...this.getVfjsState(),
          ...vfjsFieldStates,
          vfjsErrors: vfjsErrorsFiltered,
        };

        if (cb && typeof cb === 'function') {
          cb(vfjsState);
        }
      },
    });
  },
  [VFJS_EVENT_UI_FIELDS_UPDATE]() {
    this.setVfjsUiFieldsActive();
  },
  [VFJS_EVENT_MODEL_UPDATED]() {
    this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);

    // Clear hidden fields
    this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN);

    this.$emit(VFJS_EXTERNAL_EVENT_CHANGE, this.getVfjsModel());
  },
  [VFJS_EVENT_STATE_UPDATE]({ value, cb }) {
    this.setVfjsState(value);

    if (cb && typeof cb === 'function') {
      cb();
    }
  },
  [VFJS_EVENT_STATE_UPDATED]({ cb }) {
    const vfjsState = {
      vfjsErrors: [],
      vfjsFieldsActive: this.vfjsFieldsActive,
      vfjsFieldsActiveModels: this.vfjsFieldsActiveModels,
      ...this.getVfjsState(),
    };

    this.$emit(VFJS_EXTERNAL_EVENT_STATE_CHANGE, vfjsState);
    this.$emit(
      VFJS_EXTERNAL_EVENT_VALIDATED,
      vfjsState.vfjsErrors.length === 0,
    );

    if (cb && typeof cb === 'function') {
      cb();
    }
  },
};

export default vfjsBusEventActions;
