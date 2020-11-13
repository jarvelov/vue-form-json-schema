function vfjsFieldHelperAttrsChecked() {
  const { checked = [] } = this.vfjsOptions.componentProperties.attrs;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
    if (this.vfjsFieldOptions.attrs) {
      if (
        typeof this.vfjsFieldModel !== 'undefined' &&
        this.vfjsFieldModel === this.vfjsFieldOptions.attrs.value
      ) {
        return true;
      }

      return this.vfjsFieldOptions.attrs.checked;
    }
  }

  return undefined;
}

export default vfjsFieldHelperAttrsChecked;
