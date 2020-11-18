function vfjsEventFieldModelClearHidden() {
  const allModels = this.vfjsHelperGetFieldsWithClearOnHide(this.uiSchema);
  const activeModels = this.vfjsHelperGetFieldsWithClearOnHide(
    this.vfjsFieldsActive,
  );

  const inactiveModels = Object.keys(allModels).reduce((models, key) => {
    if (!(key in activeModels)) {
      // eslint-disable-next-line no-param-reassign
      models[key] = allModels[key];
    }

    return models;
  }, {});

  Object.keys(inactiveModels).forEach((key) => {
    const clearModels = inactiveModels[key];
    if (Array.isArray(clearModels)) {
      clearModels.forEach((clearModel) => {
        const newModel = this.vfjsHelperApplyFieldModel(
          typeof clearModel === 'string' ? clearModel : key,
          undefined,
        );
        this.setVfjsModel(newModel, true);
      });
    } else {
      const newModel = this.vfjsHelperApplyFieldModel(
        typeof clearModels === 'string' ? clearModels : key,
        undefined,
      );
      this.setVfjsModel(newModel, true);
    }
  });
}

export default vfjsEventFieldModelClearHidden;
