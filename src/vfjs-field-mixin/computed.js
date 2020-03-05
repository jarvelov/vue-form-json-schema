import { merge } from 'lodash';

const computed = {
  vfjsComputedFieldHasErrors() {
    return this.vfjsFieldState.vfjsFieldErrors && this.vfjsFieldState.vfjsFieldErrors.length > 0;
  },
  vfjsComputedShowFieldErrors() {
    return (
      (this.vfjsFieldState.vfjsFieldDirty && this.vfjsFieldState.vfjsFieldBlur)
      || this.vfjsOptions.showValidationErrors
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

    const { required = [], value = [] } = this.vfjsOptions.componentProperties.attrs;

    if (required.indexOf(this.vfjsComponent) !== -1) {
      attrs.required = this.vfjsFieldRequired;
    }

    if (value.indexOf(this.vfjsComponent) !== -1) {
      attrs.value = this.vfjsFieldModel || (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value);
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const domProps = {};

    const { innerHTML = [] } = this.vfjsOptions.componentProperties;

    if (innerHTML.indexOf(this.vfjsComponent) !== -1) {
      domProps.innerHTML = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML);
    }

    const { checked, value } = this.vfjsOptions.componentProperties.domProps;

    if (value.indexOf(this.vfjsComponent) !== -1) {
      domProps.value = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value);
    }

    if (checked.indexOf(this.vfjsFieldOptions.attrs.type) !== -1) {
      domProps.checked = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.checked);
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
