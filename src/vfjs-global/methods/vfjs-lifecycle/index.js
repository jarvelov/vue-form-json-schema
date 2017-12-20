const vfjsLifecycle = {
  vfjsDestroy() {
    this.vfjsEvents.forEach(event => this.removeVfjsListener(event));
  },
  vfjsInitialize() {
    // Set up the plugin's internal bus
    this.vfjsBusInitialize();

    // Set the model from props
    this.setVfjsModel(this.model);

    // Set up validation
    this.vfjsValidationInitialize();

    // Set the available components
    this.vfjsComponents = Object.assign({}, this.components);

    // Set the JSON schema
    this.vfjsSchema = Object.assign({}, this.schema);
    this.setVfjsUiSchema(this.uiSchema);

    // Set up options
    this.vfjsOptions = Object.assign({}, this.vfjsOptions, this.options);

    // Register events in vfjsEvents to vfjsBusEventHandler
    this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);

    // Check and set active fields (visible)
    this.setVfjsUiFieldsActive();
  },
};

export default vfjsLifecycle;
