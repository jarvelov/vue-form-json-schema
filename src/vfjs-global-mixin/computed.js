const computed = {
  vfjsSchemaValid() {
    return this.vfjsSchema.every(this.isVfjsFieldSchemaValid);
  },
  vfjsModelValid() {
    return this.vfjsSchema.every(this.isVfjsFieldModelValid);
  },
};

export default computed;
