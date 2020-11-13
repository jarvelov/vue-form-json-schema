function vfjsFieldHelperDomPropsValue() {
  const { value = [] } = this.vfjsOptions.componentProperties.domProps;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }

    return (
      this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value
    );
  }

  return undefined;
}

export default vfjsFieldHelperDomPropsValue;
