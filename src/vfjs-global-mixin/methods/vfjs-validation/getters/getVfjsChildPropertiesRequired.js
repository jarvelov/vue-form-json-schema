import { set } from 'lodash';

function getVfjsChildPropertiesRequired(
  parentFields = [],
  excludeProperties = [],
) {
  const uniqueProperties = parentFields.filter(
    (property) => excludeProperties.indexOf(property) === -1,
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
      const excludePropertiesChildren = [
        ...excludeProperties,
        ...uniqueProperties,
      ];

      const childFieldsRequired = this.getVfjsChildPropertiesRequired(
        propertiesRequired,
        excludePropertiesChildren,
      );

      properties.push(...childFieldsRequired);
    }

    return properties;
  }, []);
}

export default getVfjsChildPropertiesRequired;
