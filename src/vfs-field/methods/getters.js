import { merge } from 'lodash';

const getters = {
  vfsFieldGetAttributes({
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
      this.vfsFieldHelperFormatClasses(optionsClass),
      this.vfsFieldHelperFormatClasses(defaultOptionsClass),
    );

    return merge({}, defaultOptions, options, {
      class: classFormatted,
    });
  },
};

export default getters;
