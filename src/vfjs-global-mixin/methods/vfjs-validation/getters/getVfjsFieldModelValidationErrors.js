function getVfjsFieldModelValidationErrors(key, value) {
  return this.getVfjsValidationErrors(value, this.getVfjsSchema(key));
}

export default getVfjsFieldModelValidationErrors;
