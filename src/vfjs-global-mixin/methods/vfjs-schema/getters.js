import { get } from 'lodash';

const vfjsSchemaGetters = {
  getVfjsFieldSchema(key) {
    if (key) {
      return this.getVfjsSchema(key);
    }

    return this.vfjsFieldModelKey
      ? this.getVfjsSchema(this.vfjsFieldModelKey)
      : null;
  },
  getVfjsSchema(key) {
    if (key) {
      return (
        get(this.vfjsSchema.properties, key) || this.getVfjsSchemaFallback(key)
      );
    }

    return this.vfjsSchema;
  },
  getVfjsSchemaPath(path, key) {
    const vfjsSchema = this.getVfjsSchema();

    if (!path) {
      if (vfjsSchema.items) {
        return this.getVfjsSchemaPath('items');
      }

      return `properties.${key}`;
    }

    const schema = get(vfjsSchema, path);
    if (schema) {
      if (schema.items instanceof Array) {
        // FIXME: The same schema is used regardless of item's index in the array
        // This limitation is due to that schema prop must be an object and can not be an array

        const arrayPath = this.getVfjsSchemaPath(`${path}.items`);
        return this.getVfjsSchemaPath(`${arrayPath}.0`);
      }

      if (schema.oneOf instanceof Array) {
        const index = schema.oneOf.findIndex(
          (optionSchema) =>
            optionSchema.properties instanceof Object &&
            Object.keys(optionSchema.properties).includes(key),
        );

        return this.getVfjsSchemaPath(`${path}.oneOf.${index}`, key);
      }

      if (schema.properties instanceof Object) {
        return this.getVfjsSchemaPath(`${path}.properties`, key);
      }
    }

    if (!key) {
      return path;
    }

    return `${path}.${key}`;
  },
  getVfjsSchemaFallback(key) {
    const keys = String(key).split('.');
    const schema = keys.reduce(this.getVfjsSchemaPath, '');
    return get(this.getVfjsSchema(), schema);
  },
};

export default vfjsSchemaGetters;
