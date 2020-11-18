import {
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
} from '../../../constants';

function vfjsInitialize() {
  // Set the JSON schema
  this.setVfjsSchema(this.schema, true);

  // Set up options
  this.vfjsOptions = {
    ...this.vfjsOptions,
    ...this.options,
  };

  // Set up the local components
  this.vfjsComponents = this.components;

  // Set up the plugin's internal bus
  this.vfjsBusInitialize();

  // Register events in vfjsEvents to vfjsBusEventHandler
  this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);

  // Set the model from props
  this.setVfjsModel(this.model, true);

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
                this.setVfjsUiSchema(this.uiSchema);
              },
            });
          },
        });
      },
    });
  } else {
    // Set up ui schema
    this.setVfjsUiSchema(this.uiSchema);
  }
}

export default vfjsInitialize;
