import { set } from 'lodash';

const vfjsValidationGetters = {
  /** getVfjsPropertiesRequired
    @function
    @description Get all errors of type required
    @param [errors] array
    @return
      An array of the properties in the errors array
      were the error property 'keyword' was 'required'.
  */
  getVfjsPropertiesRequired(errors) {
    if (!errors) {
      return [];
    }

    return errors.reduce((required, error) => {
      if (error.keyword === 'required') {
        if (error.params && error.params.missingProperty) {
          const key = error.params.missingProperty;
          
          const errorDataPathPrefix = String(error.dataPath).substr(0, 1);
          let parent;
          
          switch (errorDataPathPrefix) {
            // JSONpath dot notation
            case '.':
              parent = error.dataPath.substr(1);
              break;
              
            // JSONpath bracket notation
            case '[':
              parent = error.dataPath.substr(2, error.dataPath.length - 4).replace('\'][\'', '.');
              break;
              
            // JSONpointer notation with forward slashes
            case '/':
              parent = error.dataPath.substr(1).replace(/\//g, '.');
              break;
          }
          
          const propertyPath = parent ? `${parent}.${key}` : key;

          if (required.indexOf(propertyPath) === -1) {
            required.push(propertyPath);
          }
        }
      }

      return required;
    }, []);
  },
  getVfjsChildPropertiesRequired(parentFields = [], excludeProperties = []) {
    const uniqueProperties = parentFields.filter(
      property => excludeProperties.indexOf(property) === -1,
    );

    return uniqueProperties.reduce((properties, property) => {
      // Add current property to array
      properties.push(property);

      // Validate schema with this property being an empty object
      const value = {};
      set(value, property, {});
      this.ajv.validate(this.getVfjsSchema(), value);
      const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);

      // If there were required properties below this property (i.e. this property is an object)
      if (propertiesRequired.length > 0) {
        const excludePropertiesChildren = [...excludeProperties, ...uniqueProperties];

        const childFieldsRequired = this.getVfjsChildPropertiesRequired(
          propertiesRequired,
          excludePropertiesChildren,
        );

        properties.push(...childFieldsRequired);
      }

      return properties;
    }, []);
  },
  getVfjsFieldModelValid(key, value) {
    const errors = this.getVfjsFieldModelValidationErrors(key, value);
    return errors.length === 0;
  },
  getVfjsFieldModelValidationErrors(key, value) {
    return this.getVfjsValidationErrors(value, this.getVfjsSchema(key));
  },
  getVfjsModelValidationErrorsLocalized() {
    const { ajv = {} } = this.vfjsOptions;
    const { locale } = ajv;

    if (typeof locale === 'function') {
      locale(this.ajv.errors);
    }
  },
  getVfjsValid() {
    const errors = this.getVfjsValidationErrors();
    return errors.length === 0;
  },
  getVfjsValidationSchema(key, value) {
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
        .map(previousPath => `properties.${previousPath}`)
        .join('.');

      const properties = previousPaths.length > 0
        ? `${previousProperties}.properties.${path}`
        : `properties.${path}`;

      const required = previousPaths.length > 0 ? `${previousProperties}.required` : 'required';

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
            const errorMessagePath = previousPaths.length > 0
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
  },
  getVfjsValidationErrors(model, schema) {
    const ajvSchema = schema || this.getVfjsSchema();
    const ajvModel = model || this.getVfjsModel();

    const valid = this.ajv.validate(ajvSchema, ajvModel);
    this.getVfjsModelValidationErrorsLocalized();
    return !valid ? this.ajv.errors : [];
  },
};

export default vfjsValidationGetters;
