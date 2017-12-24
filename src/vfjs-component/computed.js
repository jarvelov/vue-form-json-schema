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

const computed = {
  vfjsStateIsDirty() {
    return this.vfjsFieldState.$dirty;
  },
  vfjsStateHasErrors() {
    return this.vfjsFieldState.errors && this.vfjsFieldState.errors.length > 0;
  },
  vfjsComputedFieldErrorOptions() {
    return (this.vfjsStateIsDirty && this.vfjsStateHasErrors)
      ? this.vfjsFieldErrorOptions
      : {};
  },
  vfjsComputedFieldAttrs() {
    const attrs = {
      // id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
      required: this.vfjsFieldRequired,
    };

    if (elements.indexOf(this.component) !== -1) {
      attrs.value = (
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value) ||
        (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML)
      );
    }

    return attrs;
  },
  vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      key: this.vfjsFieldId,
      props: this.$options.propsData,
    };
  },
  vfjsComputedMergedFieldOptions() {
    return Object.assign(
      {},
      this.vfjsDefaultOptions,
      this.vfjsComputedFieldErrorOptions,
      this.vfjsComputedFieldOptions,
    );
  },
  vfjsAttributes() {
    return {
      ...this.getVfjsFieldAttributes(
        this.vfjsFieldOptions,
        this.vfjsComputedMergedFieldOptions,
      ),
    };
  },
};

export default computed;
