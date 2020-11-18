function getVfjsFieldValueModel(key) {
  if (typeof key === 'string') {
    return this.getVfjsFieldModel(key);
  }

  if (key === true) {
    return this.getVfjsModel();
  }

  return undefined;
}

export default getVfjsFieldValueModel;
