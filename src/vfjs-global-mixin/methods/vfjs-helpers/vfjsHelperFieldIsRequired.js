function vfjsHelperFieldIsRequired(model) {
  if (model) {
    return this.vfjsFieldsRequired.indexOf(model) !== -1;
  }

  return false;
}

export default vfjsHelperFieldIsRequired;
