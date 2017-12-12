const vfjsUiSetters = {
  setVfjsUiSchema(uiSchema) {
    this.vfjsUiSchema = [...uiSchema].reduce((fields, field) => ([
      ...fields,
      this.vfjsHelpersGenerateFieldUuid(field),
    ]), []);
  },
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.vfjsUiSchema.reduce((fields, field) => ([
      ...fields,
      this.getVfjsUiFieldActive(field),
    ]), []);
  },
};

export default vfjsUiSetters;
