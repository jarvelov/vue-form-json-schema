import vfjsFieldComponent from '../../../vfjs-field-component';
import vfjsHelperCreateElement from './vfjsHelperCreateElement';

function vfjsHelperCreateComponent({ children = [], component, props }) {
  // If the component matches one of the local components
  // passed in with the `components` prop
  const vfjsComponent = this.vfjsComponents[component] || component;

  if (!props.vfjsFieldModelKey) {
    return vfjsHelperCreateElement(
      vfjsComponent,
      {
        key: props.vfjsFieldId,
        ...this.vfjsHelperFlattenVue2Properties(props.vfjsFieldOptions),
      },
      {
        default: () => children,
      },
    );
  }

  const { slot } = props.vfjsFieldOptions;

  return vfjsHelperCreateElement(
    vfjsFieldComponent,
    {
      key: `${props.key || props.vfjsFieldId}-wrapper`,
      slot,
      vfjsComponent,
      ...props,
    },
    {
      default: () => children,
    },
  );
}

export default vfjsHelperCreateComponent;
