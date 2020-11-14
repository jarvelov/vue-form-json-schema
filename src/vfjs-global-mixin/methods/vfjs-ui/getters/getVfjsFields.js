function getVfjsFields(fields = []) {
  return fields.reduce(
    (vfjsFields, field) => [...vfjsFields, this.vfjsHelperCreateField(field)],
    [],
  );
}

export default getVfjsFields;
