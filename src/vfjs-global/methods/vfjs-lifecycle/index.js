const vfjsLifecycle = {
  vfjsDestroy() {
    this.vfjsEvents.forEach(event => this.removeVfjsListener(event));
  },
  vfjsInitialize() {
    // Set up the plugin's internal bus
    this.vfjsBusInitialize();

    // Set the model from props
    this.setVfjsModel(this.model);

    // Set the available components
    this.vfjsComponents = Object.assign({}, this.components);

    // vfjsVnodes holds the rendered components so we can reuse them
    // without having to create a new component every time something changes
    this.vfjsVnodes = {};

    // Set the JSON schema
    this.vfjsSchema = Object.assign({}, this.schema);
    this.setVfjsUiSchema(this.uiSchema);

    // Register events in vfjsEvents to vfjsBusEventHandler
    this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);

    // Set up validation
    this.vfjsValidationInitialize();

    // Check and set active fields (visible)
    this.setVfjsUiFieldsActive();
  },
};

export default vfjsLifecycle;
