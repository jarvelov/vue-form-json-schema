import { merge } from 'lodash'

const watch = {
  components(value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  model(value) {
    this.vfjsModel = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  schema(value) {
    this.vfjsSchema = Object.assign({}, value);
    this.setVfjsUiFieldsActive();
  },
  uiSchema(value) {
    this.setVfjsUiSchema(value);
    this.setVfjsUiFieldsActive();
  },
  state(value) {
    this.setVfjsUiFieldsActive();
  },
  options(value) {
    this.vfjsOptions = merge({}, this.vfjsOptions, value);

    if (this.vfjsOptions.showValidationErrors) {
      this.setVfjsValidationErrors();
    }
  },
};

export default watch;
