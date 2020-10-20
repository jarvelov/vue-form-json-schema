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
    const attrs = {
      // id: this.vfjsFieldId, // This is very useful when debugging to see when nodes are updated
    };

    const {
      checked = [],
      required = [],
      value = [],
    } = this.vfjsOptions.componentProperties.attrs;

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(required)) {
      attrs.required = this.vfjsFieldRequired;
    }

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
      attrs.value =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value);
    }

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
      attrs.checked =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.checked);
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const domProps = {};

    const { innerHTML = [] } = this.vfjsOptions.componentProperties;

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(innerHTML)) {
      domProps.innerHTML =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.domProps &&
          this.vfjsFieldOptions.domProps.innerHTML);
    }

    const { checked, value } = this.vfjsOptions.componentProperties.domProps;

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
      domProps.value =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.domProps &&
          this.vfjsFieldOptions.domProps.value);
    }

    if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
      domProps.checked =
        this.vfjsFieldModel ||
        (this.vfjsFieldOptions.domProps &&
          this.vfjsFieldOptions.domProps.checked);
    }

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
