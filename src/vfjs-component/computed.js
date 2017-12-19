import { merge } from 'lodash';

const computed = {
  vfjsAttributes() {
    const attrs = {
      required: this.vfjsFieldRequired,
    };

    const domProps = {
      required: this.vfjsFieldRequired,
    };

    if (this.component) {
      // Elements which supports the 'value' attribute
      // taken from: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
      const elements = [
        'button',
        'input',
        'li',
        'meter',
        'option',
        'param',
        'progress',
      ];

      if (elements.indexOf(this.component) !== -1) {
        domProps.innerHTML = (
          this.vfjsFieldModel ||
          (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML)
        );

        attrs.value = (
          this.vfjsFieldModel ||
          (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value) ||
          domProps.innerHTML
        );
      }
    }

    return {
      ...this.getVfjsFieldAttributes(
        this.vfjsFieldOptions,
        merge({}, this.vfjsDefaultOptions, {
          attrs,
          domProps,
          key: this.vfjsFieldId,
          props: this.$options.propsData,
        }),
      ),
    };
  },
};

export default computed;
