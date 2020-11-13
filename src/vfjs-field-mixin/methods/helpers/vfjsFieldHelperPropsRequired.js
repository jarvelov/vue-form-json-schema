function vfjsFieldHelperPropsRequired() {
  const { required = [] } = this.vfjsOptions.componentProperties;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(required)) {
    return this.vfjsFieldRequired;
  }

  return undefined;
}

export default vfjsFieldHelperPropsRequired;
