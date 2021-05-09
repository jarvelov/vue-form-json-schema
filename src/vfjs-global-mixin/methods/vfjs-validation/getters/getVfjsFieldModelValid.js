function getVfjsFieldModelValid(key, value) {
  const errors = this.getVfjsFieldModelValidationErrors(key, value);
  return errors.length === 0;
}

export default getVfjsFieldModelValid;
