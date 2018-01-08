import Ajv from 'ajv';
import { set } from 'lodash';
import getters from './getters';
import {
  VFJS_EVENT_MODEL_VALIDATE,
} from '../../../constants';

const vfjsValidation = {
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
    const uniqueProperties = parentFields.filter(property =>
      excludeProperties.indexOf(property) === -1);

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
  vfjsValidationInitialize() {
    // Set up Ajv
    this.ajv = new Ajv({
      ...this.vfjsOptions.ajvOptions,
      // The `allErrors` option is required for validation to work
      allErrors: true,
    });

    // Add additional schemas
    Object.keys(this.schemas).forEach((key) => {
      this.ajv.addSchema(this.schemas[key], key);
    });

    // TODO: Move this to a method so we can call it when the schema/ui-schema/model is updated

    // This is somewhat of a hack...
    //
    // To find out if a property is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    this.ajv.validate(this.getVfjsSchema(), {});

    if (this.ajv.errors) {
      const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
      this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
    }


    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, { vfjsModel: this.getVfjsModel() });
    }
  },
  ...getters,
};

export default vfjsValidation;
