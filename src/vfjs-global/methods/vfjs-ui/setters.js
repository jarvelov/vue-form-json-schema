import { cloneDeep } from 'lodash';

const vfjsUiSetters = {
  setVfjsUiSchema(uiSchema) {
    this.vfjsUiSchema = cloneDeep(uiSchema.reduce(
      (fields, field, index) => [...fields, this.vfjsHelperGenerateField(field, index)],
      [],
    ));
  },
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
    this.vfjsFieldsActiveModels = this.getVfjsFieldsModels(this.vfjsFieldsActive);
  },
};

export default vfjsUiSetters;
