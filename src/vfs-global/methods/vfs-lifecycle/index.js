const vfsLifecycle = {
  vfsDestroy() {
    this.vfsEvents.forEach(event => this.removeVfsListener(event));
  },
  vfsInitialize() {
    // Set up the plugin's internal bus
    this.vfsBusInitialize();

    // Set the model from props
    this.setVfsModel(this.model);

    // Set the available components
    this.vfsComponents = Object.assign({}, this.components);

    this.vfsSchema = Object.assign({}, this.schema);
    this.vfsUiSchema = [...this.uiSchema];
    this.vfsOptions = Object.assign({}, this.options);

    // Register events in vfsEvents to vfsBusEventHandler
    this.addVfsListeners(this.vfsEvents, this.vfsBusEventHandler);

    // Set up validation
    this.vfsValidationInitialize();

    // Check and set active fields (visible)
    this.setVfsUiFieldsActive();
  },
};

export default vfsLifecycle;
