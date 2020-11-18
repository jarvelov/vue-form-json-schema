function vfjsHelperGetErrors(errors = [], id) {
  return errors.map((error, index) =>
    this.vfjsHelperCreateField({
      id: `${id}-error-${index}`,
      component: 'div',
      fieldOptions: {
        class: ['vfjs-error', 'vfjs-default-error-handler'],
        domProps: {
          innerHTML: error.message,
        },
      },
    }),
  );
}

export default vfjsHelperGetErrors;
