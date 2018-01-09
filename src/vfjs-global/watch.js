import {
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
} from '../constants';

const watch = {
  model(value) {
    this.vfjsModel = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  schema(value) {
    this.vfjsSchema = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  uiSchema(value) {
    this.setVfjsUiSchema(value);
    this.setVfjsUiFieldsActive();
  },
  state(value) {
    this.setVfjsUiFieldsActive();
  },
  showValidationErrors(value) {
    if (value) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
        vfjsModel: this.getVfjsModel(),
        cb: () => {
          const validateRequired = key => new Promise((resolve, reject) => {
            this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
              key,
              value: this.getVfjsFieldModel(key),
              cb: (vfjsFieldErrors) => {
                const fieldState = this.getVfjsFieldState(key);
                this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
                  key,
                  value: {
                    ...fieldState,
                    vfjsFieldErrors,
                  },
                  cb: () => {
                    resolve();
                  },
                });
              },
            });
          });

          const requiredValidations = this.vfjsFieldsRequired.map(validateRequired);

          return Promise.all(requiredValidations)
            .then(() => {
              this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
                key: 'showValidationErrors',
                value,
              });
            });
        },
      });
    }

    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
      key: 'showValidationErrors',
      value,
    });
  },
};

export default watch;
