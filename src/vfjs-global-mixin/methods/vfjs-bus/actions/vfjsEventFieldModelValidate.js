import { set } from 'lodash';

function vfjsEventFieldModelValidate({ key, value, cb }) {
  const model = {};
  set(model, key, value);

  const schema = this.getVfjsValidationSchema(key, value);
  const errors = this.getVfjsValidationErrors(model, schema);

  if (cb && typeof cb === 'function') {
    cb(errors);
  }
}

export default vfjsEventFieldModelValidate;
