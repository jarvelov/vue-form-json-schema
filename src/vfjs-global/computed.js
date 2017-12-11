const computed = {
  vfjsSchemaValid() {
    return this.vfjsSchema.every(this.isVfjsFieldSchemaValid);
  },
  vfjsModelValid() {
    return this.vfjsSchema.every(this.isVfjsFieldModelValid);
  },
  vfjsFields() {
    return this.vfjsFieldsActive
      .filter(field => field)
      .map(this.vfjsHelperCreateField);
  },
};

export default computed;
