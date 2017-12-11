import { merge } from 'lodash';

const getters = {
  vfjsFieldGetAttributes({
    class: optionsClass,
    ...options
  } = {}, {
    class: defaultOptionsClass,
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

    return merge({}, defaultOptions, options, {
      class: classFormatted,
    });
  },
};

export default getters;
