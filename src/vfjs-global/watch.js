import { merge } from 'lodash';

const watch = {
  components(value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  model(value) {
    this.setVfjsModel(value);
  },
  schema(value) {
    this.setVfjsSchema(value);
  },
  uiSchema(value) {
    this.setVfjsUiSchema(value);
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
