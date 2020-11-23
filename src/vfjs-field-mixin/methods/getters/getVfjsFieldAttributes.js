import { isEmpty, merge } from 'lodash';

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

  return allAttributes;
}

export default getVfjsFieldAttributes;
