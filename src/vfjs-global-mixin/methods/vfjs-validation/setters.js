import {
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_UI_FIELDS_UPDATE,
} from '../../../constants';

const vfjsValidationSetters = {
  setVfjsFieldsRequired() {
    // This is somewhat of a hack...
    //
    // To find out if a property is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    this.ajv.validate(this.getVfjsSchema(), {});

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
