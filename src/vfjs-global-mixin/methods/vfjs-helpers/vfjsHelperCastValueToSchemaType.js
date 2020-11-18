function vfjsHelperCastValueToSchemaType(key, value) {
  if (typeof value !== 'undefined') {
    const schema = this.getVfjsSchema(key);

    if (!schema) {
      return value;
    }

    // Convert to a numeric value
    if (schema.type === 'number') {
      return Number(value);
    }

    if (schema.type === 'integer') {
      return parseInt(value, 10);
    }

    // Convert to a boolean value
    if (schema.type === 'boolean') {
      if (value === 'true' || value === 'false' || value === 'on') {
        return value === 'true' || value === 'on';
      }
    }
  }

  return value;
}

export default vfjsHelperCastValueToSchemaType;
