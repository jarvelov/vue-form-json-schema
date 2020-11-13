function vfjsFieldHelperAttrsValue() {
  const { value = [] } = this.vfjsOptions.componentProperties.attrs;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }

    return this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value;
  }

  return undefined;
}

export default vfjsFieldHelperAttrsValue;
