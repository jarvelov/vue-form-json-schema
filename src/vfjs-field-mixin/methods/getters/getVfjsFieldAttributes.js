import { isEmpty, merge } from 'lodash';
import vfjsHelperFlattenVue2Properties from '../../../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperFlattenVue2Properties';

function getVfjsFieldAttributes(
  {
    class: optionsClass,
    on: optionsOn,
    nativeOn: optionsNativeOn,
    ...options
  } = {},
  {
    class: defaultOptionsClass,
    on: defaultOn,
    nativeOn: defaultNativeOn,
    ...defaultOptions
  } = {},
) {
  if (!options) {
    return {};
  }

  const classFormatted = merge(
    {},
    this.vfjsFieldHelperFormatClasses(optionsClass),
    this.vfjsFieldHelperFormatClasses(defaultOptionsClass),
  );

  const onFormatted = merge(
    this.vfjsFieldHelperFormatEvents(optionsOn),
    this.vfjsFieldHelperFormatEvents(defaultOn),
  );

  const nativeOnFormatted = merge(
    this.vfjsFieldHelperFormatEvents(optionsNativeOn),
    this.vfjsFieldHelperFormatEvents(defaultNativeOn),
  );

  const computedOptions = {
    class: classFormatted,
    ...onFormatted,
    ...nativeOnFormatted,
  };

  const value =
    this.vfjsInternalModel || this.vfjsFieldValueModel || this.vfjsFieldModel;
  const valueProp = {
    [this.vfjsFieldValueProp]: value,
  };

  const allAttributes = merge(
    {},
    defaultOptions,
    options,
    computedOptions,
    valueProp,
  );

  const flattenedAttributes = vfjsHelperFlattenVue2Properties(allAttributes);

  return flattenedAttributes;
}

export default getVfjsFieldAttributes;
