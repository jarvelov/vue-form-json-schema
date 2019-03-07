import {
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_UI_FIELDS_UPDATE,
} from '../../../constants';

const vfjsValidationSetters = {
  setVfjsFieldsRequired() {
    // To find out if a property is required
    // we test the current model and schema with ajv
    // and then find all errors of the 'required' type
    this.ajv.validate(this.getVfjsSchema(), this.getVfjsModel());

    if (this.ajv.errors) {
      const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
      this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
    }
  },
  setVfjsValidationErrors() {
    this.vfjsBus.emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel: this.getVfjsModel(),
      cb: () => {
        const validateRequired = key => new Promise((resolve, reject) => {
          this.vfjsBus.emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
            key,
            value: this.getVfjsFieldModel(key),
            cb: (vfjsFieldErrors) => {
              const fieldState = this.getVfjsFieldState(key);
              this.vfjsBus.emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
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

        const operations = this.vfjsFieldsRequired.map(validateRequired);
        return Promise.all(operations).then(() => this.vfjsBus.emit(VFJS_EVENT_UI_FIELDS_UPDATE));
      },
    });
  },
};

export default vfjsValidationSetters;
