import { merge } from 'lodash';
import {
  VFJS_EXTERNAL_COMPONENTS_PROP,
  VFJS_EXTERNAL_MODEL_PROP,
  VFJS_EXTERNAL_OPTIONS_PROP,
  VFJS_EXTERNAL_SCHEMA_PROP,
  VFJS_EXTERNAL_UI_SCHEMA_PROP,
} from '../constants';

const watch = {
  [VFJS_EXTERNAL_COMPONENTS_PROP](value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  [VFJS_EXTERNAL_MODEL_PROP]: {
    deep: true,
    handler(value) {
      this.setVfjsModel(value);
    },
  },
  [VFJS_EXTERNAL_SCHEMA_PROP](value) {
    this.setVfjsSchema(value);
  },
  [VFJS_EXTERNAL_UI_SCHEMA_PROP](value) {
    this.setVfjsUiSchema(value);
  },
  [VFJS_EXTERNAL_OPTIONS_PROP](value) {
    this.vfjsOptions = merge({}, this.vfjsOptions, value);

    if (this.vfjsOptions.showValidationErrors) {
      this.setVfjsValidationErrors();
    }
  },
};

export default watch;
