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
          const parent = String(error.dataPath).substr(1);
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

    return uniqueProperties.reduce((propertiesPromise, property) => {
      // Add current property to array
      return propertiesPromise.then((properties) => {
        properties.push(property);

        // Validate schema with this property being an empty object
        const value = {};
        set(value, property, {});
        return this.ajv.validate(this.getVfjsSchema(), value)
          .then(() => {
            return properties;
          })
          .catch(valid => {
            const propertiesRequired = this.getVfjsPropertiesRequired(valid.errors);

            // If there were required properties below this property (i.e. this property is an object)
            if (propertiesRequired.length > 0) {
              const excludePropertiesChildren = [...excludeProperties, ...uniqueProperties];

              return this.getVfjsChildPropertiesRequired(
                propertiesRequired,
                excludePropertiesChildren,
              ).then(childFieldsRequired => {
                properties.push(...childFieldsRequired);
                return properties;
              });
            }

            return properties;
          });
      })
    }, Promise.resolve([]));
  },
  getVfjsFieldModelValid(key, value) {
    return this.getVfjsFieldModelValidationErrors(key, value)
      .then(errors => {
        return errors.length === 0;
      });
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
    return this.getVfjsValidationErrors()
      .then(errors => {
        return errors.length === 0;
      });
  },
  getVfjsValidationSchema(key, value) {
    const schema = {
      type: 'object',
      $async: true,
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

    return this.ajv.validate(ajvSchema, ajvModel)
      .then(valid => {
        if (valid) {
          this.getVfjsModelValidationErrorsLocalized();
          return [];
        } else {
          return valid.errors;
        }
      }).catch(valid => {
        return valid.errors;
      });
  },
};

export default vfjsValidationGetters;
