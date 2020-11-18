function getVfjsFieldModel(key) {
  if (key) {
    return this.getVfjsModel(key);
  }

  return this.vfjsFieldModelKey
    ? this.getVfjsModel(this.vfjsFieldModelKey)
    : null;
}

export default getVfjsFieldModel;
