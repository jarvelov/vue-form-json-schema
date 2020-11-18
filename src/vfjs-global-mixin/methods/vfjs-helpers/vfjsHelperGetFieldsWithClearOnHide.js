function vfjsHelperGetFieldsWithClearOnHide(fields = []) {
  return fields.reduce(
    (models, { children = [], displayOptions = {}, model }) => {
      if (displayOptions.clearOnHide) {
        if (model) {
          // eslint-disable-next-line no-param-reassign
          models[model] = displayOptions.clearOnHide;
        } else if (!model && typeof displayOptions.clearOnHide === 'string') {
          // eslint-disable-next-line no-param-reassign
          models[displayOptions.clearOnHide] = displayOptions.clearOnHide;
        }
      }

      return {
        ...models,
        ...this.vfjsHelperGetFieldsWithClearOnHide(children),
      };
    },
    {},
  );
}

export default vfjsHelperGetFieldsWithClearOnHide;
