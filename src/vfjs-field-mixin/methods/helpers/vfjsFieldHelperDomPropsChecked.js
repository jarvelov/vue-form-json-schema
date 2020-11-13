function vfjsFieldHelperDomPropsChecked() {
  const { checked = [] } = this.vfjsOptions.componentProperties.domProps;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
    if (this.vfjsFieldOptions.domProps) {
      if (this.vfjsFieldModel === this.vfjsFieldOptions.domProps.value) {
        return true;
      }

      return this.vfjsFieldOptions.domProps.checked;
    }
  }

  return undefined;
}

export default vfjsFieldHelperDomPropsChecked;
