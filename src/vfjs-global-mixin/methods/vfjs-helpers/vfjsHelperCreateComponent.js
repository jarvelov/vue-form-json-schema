import vfjsFieldComponent from '../../../vfjs-field-component';

function vfjsHelperCreateComponent({ children = [], component, props }) {
  // If the component matches one of the local components
  // passed in with the `components` prop
  const localComponent = this.vfjsComponents[component];

  if (!props.vfjsFieldModelKey) {
    return this.$createElement(
      localComponent || component,
      {
        key: props.vfjsFieldId,
        ...props.vfjsFieldOptions,
      },
      children,
    );
  }

  const { slot } = props.vfjsFieldOptions;

  return this.$createElement(
    vfjsFieldComponent,
    {
      key: `${props.key || props.vfjsFieldId}-wrapper`,
      slot,
      props: {
        ...props,
        vfjsComponent: localComponent || component,
      },
    },
    children,
  );
}

export default vfjsHelperCreateComponent;
