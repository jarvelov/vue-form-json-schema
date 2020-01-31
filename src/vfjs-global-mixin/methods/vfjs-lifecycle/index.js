import { VFJS_EVENT_MODEL_VALIDATE, VFJS_EVENT_STATE_UPDATE } from '../../../constants';

const vfjsLifecycle = {
  vfjsDestroy() {
    this.vfjsEvents.forEach((event) => this.removeVfjsListener(event));
  },
  vfjsInitialize() {
    // Set the JSON schema
    this.setVfjsSchema(this.schema);

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

    // Set up ui schema
    this.setVfjsUiSchema(this.uiSchema);

    // Check and set active fields (visible)
    this.setVfjsUiFieldsActive();

    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      const vfjsModel = this.getVfjsModel();

      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
        vfjsModel,
        cb: (vfjsState) => {
          this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, { value: vfjsState });
        },
      });
    }
  },
};

export default vfjsLifecycle;
