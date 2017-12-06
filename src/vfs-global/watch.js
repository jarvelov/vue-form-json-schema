const watch = {
  model(value) {
    this.vfsModel = Object.assign({}, value);
    this.setVfsUiFieldsActive();
  },
  schema(value) {
    this.vfsSchema = Object.assign({}, value);
    this.setVfsUiFieldsActive();
  },
  uiSchema(value) {
    this.vfsUiSchema = value.slice(0);
    this.setVfsUiFieldsActive();
  },
};

export default watch;
