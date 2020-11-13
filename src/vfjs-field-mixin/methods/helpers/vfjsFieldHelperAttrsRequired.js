function vfjsFieldHelperAttrsRequired() {
  const { required = [] } = this.vfjsOptions.componentProperties.attrs;

  if (this.vfjsFieldHelperComponentMatchesComponentProperties(required)) {
    return this.vfjsFieldRequired;
  }

  return undefined;
}

export default vfjsFieldHelperAttrsRequired;
