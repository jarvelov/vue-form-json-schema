import { merge } from 'lodash';

const computed = {
  vfjsComputedFieldHasErrors() {
    const { vfjsFieldErrors } = this.vfjsFieldState;

    return vfjsFieldErrors && vfjsFieldErrors.length > 0;
  },
  vfjsComputedShowFieldErrors() {
    const { vfjsFieldDirty, vfjsFieldBlur } = this.vfjsFieldState;
    const { showValidationErrors } = this.vfjsOptions;

    return (vfjsFieldDirty && vfjsFieldBlur) || showValidationErrors;
  },
  vfjsComputedFieldErrorOptions() {
    if (this.vfjsComputedShowFieldErrors && this.vfjsComputedFieldHasErrors) {
      return this.vfjsFieldErrorOptions;
    }

    return {};
  },
  vfjsComputedFieldAttrs() {
    const required = this.vfjsFieldHelperAttrsRequired();
    const value = this.vfjsFieldHelperAttrsValue();
    const checked = this.vfjsFieldHelperAttrsChecked();

    const attrs = {
      // id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
    };

    if (typeof required !== 'undefined') {
      attrs.required = required;
    }

    if (typeof value !== 'undefined') {
      attrs.value = value;
    }

    if (typeof checked !== 'undefined') {
      attrs.checked = checked;
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const innerHTML = this.vfjsFieldHelperDomPropsInnerHTML();
    const value = this.vfjsFieldHelperDomPropsValue();
    const checked = this.vfjsFieldHelperDomPropsChecked();

    const domProps = {};

    if (typeof innerHTML !== 'undefined') {
      domProps.innerHTML = innerHTML;
    }

    if (typeof value !== 'undefined') {
      domProps.value = value;
    }

    if (typeof checked !== 'undefined') {
      domProps.checked = checked;
    }

    return domProps;
  },
  vfjsComputedFieldProps() {
    const required = this.vfjsFieldHelperPropsRequired();

    const props = {};

    if (typeof required !== 'undefined') {
      props.required = required;
    }

    return props;
  },
  vfjsComputedFieldOptions() {
    return {
      ...this.vfjsComputedFieldAttrs,
      ...this.vfjsComputedFieldDomProps,
      ...this.vfjsComputedFieldProps,
      key: this.vfjsFieldOptions.key || this.vfjsFieldId,
      directives: this.vfjsFieldOptions.directives,
    };
  },
  vfjsComputedMergedFieldOptions() {
    return merge(
      {},
      this.vfjsComputedFieldErrorOptions,
      this.vfjsComputedFieldOptions,
    );
  },
};

export default computed;
