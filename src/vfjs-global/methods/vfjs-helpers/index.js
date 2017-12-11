import Vue from 'vue';
import { set } from 'lodash';
import vfjsFieldMixin from '../../../vfjs-field';

const vfjsHelpers = {
  vfjsHelperCreateField(uiSchema) {
    const {
      children = [],
      component,
      model = '',
      fieldOptions = {},
      ...options
    } = uiSchema;

    const isArray = this.vfjsHelperFieldIsArray(model);
    const schema = this.getVfjsFieldSchema(model) || {};
    const modelValue = this.getVfjsFieldModel(model);
    const state = this.getVfjsFieldState(model) || {};

    const fallbackValue = (typeof modelValue !== 'undefined') ? modelValue : null;
    const value = fieldOptions.value || fallbackValue;

    return {
      component: this.vfjsHelperCreateComponentWrapper(component),
      children: isArray
        ? children.reduce((flattenedChildren, child) => ([
          ...flattenedChildren,
          ...child.map(this.vfjsHelperCreateField),
        ]), [])
        : children.map(this.vfjsHelperCreateField),
      props: {
        ...options,
        ...fieldOptions,
        children,
        model,
        schema,
        state,
        uiSchema,
        value,
        vfjsBus: this.vfjsBus,
        vfjsFieldOptions: fieldOptions,
        vfjsModel: this.getVfjsModel(),
        vfjsState: this.getVfjsState(),
        vfjsFieldState: state,
        vfjsFieldModel: value,
        vfjsFieldModelKey: model,
        vfjsFieldModelValue: value,
        vfjsFieldSchema: schema,
        vfjsFieldUiSchema: uiSchema,
      },
    };
  },
  vfjsHelperCreateComponentWrapper(component) {
    return {
      name: 'vue-form-json-schema-field-wrapper',
      mixins: [vfjsFieldMixin],
      computed: {
        attributes() {
          return this.vfjsFieldGetAttributes(this.vfjsFieldOptions);
        },
      },
      render() {
        return this.$createElement(component, {
          ...this.attributes,
        }, this.$slots.default);
      },
    };
  },
  vfjsHelperApplyFieldModel(key, value) {
    const newVfjsModel = Object.assign({}, this.getVfjsModel());
    set(newVfjsModel, key, value);
    return newVfjsModel;
  },
  vfjsHelperChildArrayMapper({ model, children = [], ...child }, parentModel, index) {
    return {
      ...child,
      model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
      children: this.vfjsHelperChildArrayReducerMapper(parentModel, children, index),
    };
  },
  vfjsHelperChildArrayReducerMapper(model, children = [], index) {
    return children.reduce((allChildren, child) => ([
      ...allChildren,
      this.vfjsHelperChildArrayMapper(child, model, index),
    ]), []);
  },
  vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? `${parentModel}.${index}.${relativeModel}` : model;
  },
  vfjsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfjsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfjsFieldSchema(key);
    return schema ? schema.type === 'array' : false;
  },
  vfjsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
};

export default vfjsHelpers;
