function vfjsHelperFieldIsArray(key) {
  if (!key) {
    return false;
  }

  const schema = this.getVfjsFieldSchema(key);
  if (schema) {
    return Array.isArray(schema.items);
  }

  return false;
}

export default vfjsHelperFieldIsArray;
