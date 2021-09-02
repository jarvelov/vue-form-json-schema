function vfjsHelperFlattenVue2Properties(fieldOptions) {
  let flattenedFieldOptions = { ...fieldOptions };

  if ('attrs' in fieldOptions) {
    delete flattenedFieldOptions.attrs;

    flattenedFieldOptions = {
      ...flattenedFieldOptions,
      ...fieldOptions.attrs,
    };
  }

  if ('domProps' in fieldOptions) {
    delete flattenedFieldOptions.domProps;

    flattenedFieldOptions = {
      ...flattenedFieldOptions,
      ...fieldOptions.domProps,
    };
  }

  if ('props' in fieldOptions) {
    delete flattenedFieldOptions.props;

    flattenedFieldOptions = {
      ...flattenedFieldOptions,
      ...fieldOptions.domProps,
    };
  }

  return flattenedFieldOptions;
}

export default vfjsHelperFlattenVue2Properties;
