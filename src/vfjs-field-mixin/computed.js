import { merge } from 'lodash';

const computed = {
  vfjsComputedFieldHasErrors() {
    return (
      this.vfjsFieldState.vfjsFieldErrors &&
      this.vfjsFieldState.vfjsFieldErrors.length > 0
    );
  },
  vfjsComputedShowFieldErrors() {
    return (
      (this.vfjsFieldState.vfjsFieldDirty &&
        this.vfjsFieldState.vfjsFieldBlur) ||
      this.vfjsOptions.showValidationErrors
    );
  },
  vfjsComputedFieldErrorOptions() {
    return this.vfjsComputedShowFieldErrors && this.vfjsComputedFieldHasErrors
      ? this.vfjsFieldErrorOptions
      : {};
  },
  vfjsComputedFieldAttrs() {
    const required = this.vfjsFieldHelperAttrsRequired();
    const value = this.vfjsFieldHelperAttrsValue();
    const checked = this.vfjsFieldHelperAttrsChecked();

    const attrs = {
      // id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
      required,
      value,
      checked,
    };

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const innerHTML = this.vfjsFieldHelperDomPropsInnerHTML();
    const value = this.vfjsFieldHelperDomPropsValue();
    const checked = this.vfjsFieldHelperDomPropsChecked();

    const domProps = {
      innerHTML,
      value,
      checked,
    };

    return domProps;
  },
  vfjsComputedFieldProps() {
    const props = {};

    const { required = [] } = this.vfjsOptions.componentProperties;

    if (required.indexOf(this.vfjsComponent) !== -1) {
      props.required = this.vfjsFieldRequired;
    }

    return props;
  },
  vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      domProps: this.vfjsComputedFieldDomProps,
      key: this.vfjsFieldOptions.key || this.vfjsFieldId,
      props: this.vfjsComputedFieldProps,
    };
  },
  vfjsComputedMergedFieldOptions() {
    return merge(
      {},
      this.vfjsDefaultOptions,
      this.vfjsComputedFieldErrorOptions,
      this.vfjsComputedFieldOptions,
    );
  },
};

export default computed;
