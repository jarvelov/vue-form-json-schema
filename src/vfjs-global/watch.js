const watch = {
  model(value) {
    this.vfjsModel = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  schema(value) {
    this.vfjsSchema = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  uiSchema(value) {
    this.setVfjsUiSchema(value);
    this.setVfjsUiFieldsActive();
  },
  state(value) {
    this.setVfjsUiFieldsActive();
  },
};

export default watch;
