function getVfjsValidationErrors(model, schema) {
  const ajvSchema = schema || this.getVfjsSchema();
  const ajvModel = model || this.getVfjsModel();

  const valid = this.ajv.validate(ajvSchema, ajvModel);
  this.getVfjsModelValidationErrorsLocalized();

  return !valid ? this.ajv.errors : [];
}

export default getVfjsValidationErrors;
