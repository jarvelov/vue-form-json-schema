import { cloneDeep, isEqual } from 'lodash';

function setVfjsUiSchema(uiSchema = []) {
  const newVfjsUiSchema = uiSchema.reduce(
    (fields, field, index) => [
      ...fields,
      this.vfjsHelperGenerateField(field, `${this.id}-${index}`),
    ],
    [],
  );

  if (!isEqual(newVfjsUiSchema, this.vfjsUiSchema)) {
    this.vfjsUiSchema = cloneDeep(newVfjsUiSchema);
    this.setVfjsUiFieldsActive();
  }
}

export default setVfjsUiSchema;
