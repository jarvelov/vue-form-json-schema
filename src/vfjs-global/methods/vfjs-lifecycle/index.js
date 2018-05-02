import { cloneDeep } from 'lodash';

const vfjsLifecycle = {
  vfjsDestroy() {
    this.vfjsEvents.forEach(event => this.removeVfjsListener(event));
  },
  vfjsInitialize() {
    // Set the JSON schema
    this.setVfjsSchema(this.schema);

    // Set up options
    this.vfjsOptions = cloneDeep(this.vfjsOptions, this.options);

    // Set up the local components
    this.vfjsComponents = cloneDeep(this.components);

    // Set up the plugin's internal bus
    this.vfjsBusInitialize();

    // Set the model from props
    this.setVfjsModel(this.model);

    // Set up validation
    this.vfjsValidationInitialize();

    // Set up ui schema
    this.setVfjsUiSchema(this.uiSchema);

    // Register events in vfjsEvents to vfjsBusEventHandler
    this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);

    // Check and set active fields (visible)
    this.setVfjsUiFieldsActive();
  },
};

export default vfjsLifecycle;
