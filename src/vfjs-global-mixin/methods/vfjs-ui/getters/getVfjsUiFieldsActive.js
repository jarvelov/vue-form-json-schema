function getVfjsUiFieldsActive(fields) {
  return fields.reduce((newFields, field, index) => {
    if (field) {
      const newField = this.getVfjsUiField(field);
      if (newField) {
        newFields.push(newField);
      }
    }

    return newFields;
  }, []);
}

export default getVfjsUiFieldsActive;
