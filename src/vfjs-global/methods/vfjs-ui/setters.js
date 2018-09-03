import { cloneDeep } from 'lodash';
import { VFJS_EVENT_STATE_UPDATED } from '../../../constants';

const vfjsUiSetters = {
  setVfjsUiSchema(uiSchema = []) {
    this.vfjsUiSchema = cloneDeep(uiSchema.reduce(
      (fields, field, index) => [...fields, this.vfjsHelperGenerateField(field, index)],
      [],
    ));
  },
  },
  setVfjsUiFieldsActive() {
    this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
    this.vfjsFieldsActiveModels = this.getVfjsFieldsModels(this.vfjsFieldsActive);

    this.vfjsBus.emit(VFJS_EVENT_STATE_UPDATED, () => {
      this.setVfjsFields();
    });
  },
  setVfjsFields() {
    this.vfjsFields = this.vfjsFieldsActive.map(this.vfjsHelperCreateField);
  },
};

export default vfjsUiSetters;
