import { merge } from '../helpers';

// Elements which supports the 'value' attribute
const attrsValueElements = ['input', 'option', 'textarea'];

// Elements which should have its DOM property 'value' updated
const domPropsValueElements = ['input', 'textarea'];

// Elements which should have its DOM property 'checked' updated
const domPropsCheckedElements = ['checkbox', 'radio'];

// Elements which has their value within the tags
const innerHTMLElements = ['textarea'];

// Elements which supports the 'required' attribute
const requiredElements = ['input', 'select', 'textarea'];

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

    if (requiredElements.indexOf(this.vfjsComponent) !== -1) {
      attrs.required = this.vfjsFieldRequired;
    }

    if (attrsValueElements.indexOf(this.vfjsComponent) !== -1) {
      attrs.value = this.vfjsFieldModel || (this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value);
    }

    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const domProps = {};

    if (innerHTMLElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.innerHTML = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML);
    }

    if (domPropsValueElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.value = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value);
    }

    if (domPropsCheckedElements.indexOf(this.vfjsComponent) !== -1) {
      domProps.checked = this.vfjsFieldModel
        || (this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.checked);
    }

    return domProps;
  },
  vfjsComputedFieldOptions() {
    return {
      attrs: this.vfjsComputedFieldAttrs,
      domProps: this.vfjsComputedFieldDomProps,
      key: this.vfjsFieldOptions.key || this.vfjsFieldId,
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
