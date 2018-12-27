import { merge } from 'lodash';

const getters = {
  getVfjsAttributes() {
    return this.getVfjsFieldAttributes(this.vfjsFieldOptions, this.vfjsComputedMergedFieldOptions);
  },
  getVfjsFieldAttributes(
    {
      class: optionsClass, on: optionsOn, nativeOn: optionsNativeOn, ...options
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
      on: onFormatted,
      nativeOn: nativeOnFormatted,
    };

    const defaultProps = Object.assign(
      {},
      {
        props: this.$options.propsData,
      },
    );

    const fieldOptionsAsProps = { props: options };

    const valueProp = {
      props: {
        [this.vfjsFieldValueProp]: this.vfjsFieldModel,
      },
    };

    const allAttributes = merge(
      {},
      defaultProps,
      defaultOptions,
      fieldOptionsAsProps,
      options,
      computedOptions,
      valueProp,
    );

    return allAttributes;
  },
};

export default getters;
