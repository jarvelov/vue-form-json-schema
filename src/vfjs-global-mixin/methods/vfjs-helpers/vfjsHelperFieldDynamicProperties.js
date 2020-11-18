import { merge } from 'lodash';

function vfjsHelperFieldDynamicProperties({ dynamicOptions, ...field }) {
  if (!dynamicOptions) {
    return null;
  }

  if (Array.isArray(dynamicOptions)) {
    return dynamicOptions.reduce((properties, { schema, model, options }) => {
      if (this.vfjsHelperSchemaHasErrors(schema, model)) {
        return merge(properties, options);
      }

      return properties;
    }, {});
  }

  const { schema, model, options } = dynamicOptions;
  if (this.vfjsHelperSchemaHasErrors(schema, model)) {
    return options;
  }

  return null;
}

export default vfjsHelperFieldDynamicProperties;
