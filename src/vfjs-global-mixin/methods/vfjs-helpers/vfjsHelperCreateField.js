function vfjsHelperCreateField(vfjsFieldUiSchema) {
  const {
    component,
    children = [],
    id: vfjsFieldId,
    errorHandler: vfjsFieldErrorHandler,
    errorOptions: vfjsFieldErrorOptions = {},
    eventProp: vfjsFieldEventProp = this.vfjsOptions.eventProp,
    fieldOptions: vfjsFieldOptions = {},
    model: vfjsFieldModelKey = '',
    required: vfjsFieldRequired = false,
    valueProp: vfjsFieldValueProp = this.vfjsOptions.valueProp,
    valueModel: vfjsFieldValueModelKey,
    internalModel: vfjsFieldInternalModel = false,
  } = vfjsFieldUiSchema;

  const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
  const vfjsFieldSchemas = this.schemas;
  const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
  const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
  const vfjsModel = this.getVfjsModel();
  const vfjsState = this.getVfjsState();
  const vfjsFieldValueModel = this.getVfjsFieldValueModel(
    vfjsFieldValueModelKey,
  );

  // Get field errors
  const { vfjsFieldErrors = [] } = vfjsFieldState;

  // If this field is an errorHandler we pass the errors as the children
  // but only if the error handler does not have children of its own or
  // domProps.innerHTML is set
  const { domProps } = vfjsFieldOptions;
  const generateErrorsAsChildren =
    vfjsFieldErrorHandler &&
    vfjsFieldErrors.length > 0 &&
    (!domProps || !domProps.innerHTML) &&
    children.length === 0;

  const vfjsChildren = generateErrorsAsChildren
    ? this.vfjsHelperGetErrors(vfjsFieldErrors, vfjsFieldId)
    : children.map(this.vfjsHelperCreateField);

  const props = {
    ...vfjsFieldOptions,
    vfjsBus: this.vfjsBus,
    vfjsChildrenUiSchema: children,
    vfjsOptions: this.vfjsOptions,
    vfjsChildren,
    vfjsFieldErrorHandler,
    vfjsFieldErrorOptions,
    vfjsFieldErrors,
    vfjsFieldEventProp,
    vfjsFieldId,
    vfjsFieldInternalModel,
    vfjsFieldModel,
    vfjsFieldModelKey,
    vfjsFieldOptions,
    vfjsFieldRequired,
    vfjsFieldSchema,
    vfjsFieldSchemas,
    vfjsFieldState,
    vfjsFieldUiSchema,
    vfjsFieldValueModel,
    vfjsFieldValueModelKey,
    vfjsFieldValueProp,
    vfjsModel,
    vfjsState,
  };

  return this.vfjsHelperCreateComponent({
    children: vfjsChildren,
    component,
    props,
  });
}

export default vfjsHelperCreateField;
