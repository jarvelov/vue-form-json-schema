function vfjsHelperSchemaHasErrors(schema, model) {
  const value =
    typeof model === 'undefined'
      ? this.getVfjsModel()
      : this.getVfjsFieldModel(model);

  this.ajv.validate(schema, value);
  const oldErrors = this.ajv.errors ? this.ajv.errors : [];

  return oldErrors.length === 0;
}

export default vfjsHelperSchemaHasErrors;
