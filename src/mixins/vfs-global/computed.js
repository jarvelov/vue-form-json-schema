const computed = {
  vfsSchemaValid() {
    return this.vfsSchema.every(this.isVfsFieldSchemaValid);
  },
  vfsModelValid() {
    return this.vfsSchema.every(this.isVfsFieldModelValid);
  },
  vfsFields() {
    return this.vfsUiSchema.map(this.getVfsField);
  },
};

export default computed;
