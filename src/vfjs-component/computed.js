// Elements which supports the 'value' attribute
const valueElements = [
  'input',
  'option',
  'textarea',
];

const innerHTMLElements = [
  'textarea',
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

    if (valueElements.indexOf(this.component) !== -1) {
      attrs.value = (
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value)
      );
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const domProps = {};

    if (innerHTMLElements.indexOf(this.component) !== -1) {
      domProps.innerHTML = (
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML)
      );
    }

    return domProps;
  },
  vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      domProps: this.vfjsComputedFieldDomProps,
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
