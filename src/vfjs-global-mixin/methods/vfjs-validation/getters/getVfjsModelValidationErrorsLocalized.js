function getVfjsModelValidationErrorsLocalized() {
  const { ajv = {} } = this.vfjsOptions;
  const { locale } = ajv;

  if (typeof locale === 'function') {
    locale(this.ajv.errors);
  }
}

export default getVfjsModelValidationErrorsLocalized;
