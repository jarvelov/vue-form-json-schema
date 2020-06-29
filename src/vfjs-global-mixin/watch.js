import { merge } from 'lodash';

const watch = {
  components(value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  model: {
    deep: true,
    handler(value) {
      this.setVfjsModel(value);
    },
  },
  schema(value) {
    this.setVfjsSchema(value);
  },
  uiSchema(value) {
    this.setVfjsUiSchema(value);
  },
  options(value) {
    this.vfjsOptions = merge({}, this.vfjsOptions, value);

    if (this.vfjsOptions.showValidationErrors) {
      this.setVfjsValidationErrors();
    }
  },
};

export default watch;
