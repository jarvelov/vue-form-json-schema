import { get } from 'lodash';

function getVfjsUiSchema(key) {
  if (key) {
    return get(this.vfjsUiSchema, key);
  }

  return this.vfjsUiSchema;
}

export default getVfjsUiSchema;
