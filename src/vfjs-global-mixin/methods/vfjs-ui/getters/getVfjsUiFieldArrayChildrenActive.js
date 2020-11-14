function getVfjsUiFieldArrayChildrenActive(model, children) {
  const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

  return vfjsFieldModel
    .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
    .map(this.getVfjsUiFieldsActive);
}

export default getVfjsUiFieldArrayChildrenActive;
