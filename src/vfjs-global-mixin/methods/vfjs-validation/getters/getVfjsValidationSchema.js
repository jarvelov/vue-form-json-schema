import { set } from 'lodash';

function getVfjsValidationSchema(key, value) {
  const schema = {
    type: 'object',
    properties: {},
  };

  const isRequired = this.vfjsHelperFieldIsRequired(key);
  const fieldSchema = this.getVfjsSchema(key) || {};

  const paths = key.split('.');
  const previousPaths = [];
  paths.forEach((path, index) => {
    const previousProperties = previousPaths
      .map((previousPath) => `properties.${previousPath}`)
      .join('.');

    const properties =
      previousPaths.length > 0
        ? `${previousProperties}.properties.${path}`
        : `properties.${path}`;

    const required =
      previousPaths.length > 0 ? `${previousProperties}.required` : 'required';

    if (index === paths.length - 1) {
      set(schema, properties, fieldSchema);

      if (isRequired) {
        set(schema, required, [path]);

        // IF   ajv-errors plugin is present (errorMessage keyword is added)
        // AND  fieldSchema has a custom errorMessage definition:
        // THEN add that errorMessage one level up in the schema's hierarchy
        //      (right next to where the required fields are defined)
        //      so that ajv can handle this properly with the ajv-errors plugin
        if (this.ajv.RULES.keywords.errorMessage && fieldSchema.errorMessage) {
          const errorMessagePath =
            previousPaths.length > 0
              ? `${previousProperties}.errorMessage`
              : 'errorMessage';

          set(schema, errorMessagePath, fieldSchema.errorMessage);
        }
      }
    } else {
      set(schema, properties, {});
      set(schema, required, [path]);
    }

    previousPaths.push(path);
  });

  return schema;
}
export default getVfjsValidationSchema;
