import {
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
  VFJS_EXTERNAL_COMPONENTS_PROP,
  VFJS_EXTERNAL_MODEL_PROP,
  VFJS_EXTERNAL_OPTIONS_PROP,
  VFJS_EXTERNAL_SCHEMA_PROP,
  VFJS_EXTERNAL_UI_SCHEMA_PROP,
} from '../../../constants';

function vfjsInitialize() {
  // Set the JSON schema
  this.setVfjsSchema(this[VFJS_EXTERNAL_SCHEMA_PROP], true);

  // Set up options
  this.vfjsOptions = {
    ...this.vfjsOptions,
    ...this[VFJS_EXTERNAL_OPTIONS_PROP],
  };

  // Set up the local components
  this.vfjsComponents = this[VFJS_EXTERNAL_COMPONENTS_PROP];

  // Set up the plugin's internal bus
  this.vfjsBusInitialize();

  // Register events in vfjsEvents to vfjsBusEventHandler
  this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);

  // Set the model from props
  this.setVfjsModel(this[VFJS_EXTERNAL_MODEL_PROP], true);

  // Set up validation
  this.vfjsValidationInitialize();

  // Check if validation is enabled and set to run on load
  if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
    const vfjsModel = this.getVfjsModel();

    this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel,
      cb: (vfjsState) => {
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
          value: vfjsState,
          cb: () => {
            this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
              cb: () => {
                // Set up ui schema
                this.setVfjsUiSchema(this[VFJS_EXTERNAL_UI_SCHEMA_PROP]);
              },
            });
          },
        });
      },
    });
  } else {
    // Set up ui schema
    this.setVfjsUiSchema(this[VFJS_EXTERNAL_UI_SCHEMA_PROP]);
  }
}

export default vfjsInitialize;
