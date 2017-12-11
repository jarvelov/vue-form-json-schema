const vfsUiSetters = {
  setVfsUiFieldsActive() {
    this.vfsFieldsActive = this.vfsUiSchema.reduce((fields, field) => ([
      ...fields,
      this.getVfsUiFieldActive(field),
    ]), []);
  },
};

export default vfsUiSetters;
