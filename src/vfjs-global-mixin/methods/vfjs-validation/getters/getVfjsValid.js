function getVfjsValid() {
  const errors = this.getVfjsValidationErrors();

  return errors.length === 0;
}

export default getVfjsValid;
