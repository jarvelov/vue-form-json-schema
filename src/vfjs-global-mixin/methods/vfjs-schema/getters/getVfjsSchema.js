import { get } from 'lodash';

function getVfjsSchema(key) {
  if (key) {
    return (
      get(this.vfjsSchema.properties, key) || this.getVfjsSchemaFallback(key)
    );
  }

  return this.vfjsSchema;
}

export default getVfjsSchema;
