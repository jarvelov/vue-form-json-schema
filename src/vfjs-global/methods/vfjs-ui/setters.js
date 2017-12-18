const vfjsUiSetters = {
  setVfjsUiSchema(uiSchema) {
    this.vfjsUiSchema = [...uiSchema].reduce((fields, field) => ([
      ...fields,
      this.vfjsHelperGenerateField(field),
    ]), []);
  },
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
  },
};

export default vfjsUiSetters;
