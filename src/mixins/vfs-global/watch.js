const watch = {
  model(value) {
    this.vfsModel = Object.assign({}, value);
  },
  schema(value) {
    this.vfsSchema = Object.assign({}, value);
  },
  uiSchema(value) {
    this.vfsUiSchema = value.slice(0);
  },
};

export default watch;
