import { merge } from 'lodash';

const getters = {
  vfjsFieldGetAttributes({
    class: optionsClass,
    on: optionsOn,
    nativeOn: optionsNativeOn,
    ...options
  } = {}, {
    class: defaultOptionsClass,
    on: defaultOn,
    nativeOn: defaultNativeOn,
    ...defaultOptions
  } = {}) {
    if (!options) {
      return {};
    }

    const classFormatted = merge(
      {},
      this.vfjsFieldHelperFormatClasses(optionsClass),
      this.vfjsFieldHelperFormatClasses(defaultOptionsClass),
    );

    const onFormatted = merge(
      this.vfjsFieldFormatEvents(optionsOn),
      this.vfjsFieldFormatEvents(defaultOn),
    );

    const nativeOnFormatted = merge(
      this.vfjsFieldFormatEvents(optionsNativeOn),
      this.vfjsFieldFormatEvents(defaultNativeOn),
    );

    return merge({}, defaultOptions, options, {
      class: classFormatted,
      on: onFormatted,
      nativeOn: nativeOnFormatted,
    });
  },
};

export default getters;
