function vfjsFieldHelperComponentMatchesComponentProperties(
  componentProperties,
) {
  return componentProperties.some((componentProperty) => {
    if (typeof componentProperty === 'string') {
      return this.vfjsComponent === componentProperty;
    }

    if (typeof componentProperty === 'object') {
      const { component, ...properties } = componentProperty;

      if (this.vfjsComponent === component) {
        return Object.keys(properties).every((property) => {
          if (property in this.vfjsFieldOptions) {
            const keys = properties[property];

            return Object.keys(keys).every(
              (key) => this.vfjsFieldOptions[property][key] === keys[key],
            );
          }

          return false;
        });
      }
    }

    return false;
  });
}

export default vfjsFieldHelperComponentMatchesComponentProperties;
