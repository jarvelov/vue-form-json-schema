function vfjsFieldHelperDomPropsInnerHTML() {
  const { innerHTML = [] } = this.vfjsOptions.componentProperties.domProps;

  if (this.vfjsFieldHelperComponentMatchesComponentProperties(innerHTML)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }

    return (
      this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML
    );
  }

  return undefined;
}

export default vfjsFieldHelperDomPropsInnerHTML;
