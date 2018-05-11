const vfjsLifecycle = {
  vfjsDestroy() {
    this.vfjsEvents.forEach(event => this.removeVfjsListener(event));
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
    this.setVfjsModel(this.model);

    // Set up validation
    this.vfjsValidationInitialize();

    // Set up ui schema
    this.setVfjsUiSchema(this.uiSchema);

    // Check and set active fields (visible)
    this.setVfjsUiFieldsActive();
  },
};

export default vfjsLifecycle;
