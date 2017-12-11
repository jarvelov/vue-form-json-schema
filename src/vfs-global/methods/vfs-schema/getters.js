import { get } from 'lodash';

const vfsSchemaGetters = {
  getVfsFieldSchema(key) {
    if (key) {
      return this.getVfsSchema(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsSchema(this.vfsFieldModelKey)
      : null;
  },
  getVfsSchema(key) {
    if (key) {
      return get(this.getVfsSchema.properties, key) || this.getVfsSchemaFallback(key);
    }

    return this.vfsSchema;
  },
  getVfsSchemaPath(path, key) {
    const vfsSchema = this.getVfsSchema();

    if (!path) {
      if (vfsSchema.items) {
        return this.getVfsSchemaPath('items');
      }

      return `properties.${key}`;
    }

    const schema = get(vfsSchema, path);
    if (schema) {
      if (schema.type === 'array' || schema.items instanceof Array) {
        // FIXME: The same schema is used regardless of item's index in the array
        // This limitation is due to that schema prop must be an object and can not be an array

        const arrayPath = this.getVfsSchemaPath(`${path}.items`);
        return this.getVfsSchemaPath(`${arrayPath}.0`);
      } else if (schema.type === 'object' || schema.properties instanceof Object) {
        return this.getVfsSchemaPath(`${path}.properties`);
      }
    }

    if (!key) {
      return path;
    }

    return `${path}.${key}`;
  },
  getVfsSchemaFallback(key) {
    const keys = String(key).split('.');
    const schema = keys.reduce(this.getVfsSchemaPath, '');
    return get(this.getVfsSchema(), schema);
  },
};

export default vfsSchemaGetters;
