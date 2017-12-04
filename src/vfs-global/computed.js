const computed = {
  vfsSchemaValid() {
    return this.vfsSchema.every(this.isVfsFieldSchemaValid);
  },
  vfsModelValid() {
    return this.vfsSchema.every(this.isVfsFieldModelValid);
  },
  vfsFields() {
    return this.vfsFieldsActive.map(this.getVfsField);
  },
};

export default computed;
