const vfjsUiSetters = {
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.vfjsUiSchema.reduce((fields, field) => ([
      ...fields,
      this.getVfjsUiFieldActive(field),
    ]), []);
  },
};

export default vfjsUiSetters;
