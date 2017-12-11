import { merge } from 'lodash';

const getters = {
  getVfjsFieldAttributes({
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

    const computedOptions = {
      class: classFormatted,
      on: onFormatted,
      nativeOn: nativeOnFormatted,
    };

    const fieldOptionsAsProps = { props: options };

    return merge({}, defaultOptions, fieldOptionsAsProps, options, computedOptions);
  },
};

export default getters;
