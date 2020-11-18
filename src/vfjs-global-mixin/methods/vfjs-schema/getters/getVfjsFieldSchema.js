function getVfjsFieldSchema(key) {
  if (key) {
    return this.getVfjsSchema(key);
  }

  return this.vfjsFieldModelKey
    ? this.getVfjsSchema(this.vfjsFieldModelKey)
    : null;
}

export default getVfjsFieldSchema;
