import Vue from 'vue';
import { set } from 'lodash';

const vfsHelpers = {
  vfsHelperCreateField(uiSchema) {
    const {
      children = [],
      component,
      model = '',
      field,
      fieldOptions = {},
      ...options
    } = uiSchema;

    const isArray = this.vfsHelperFieldIsArray(model);
    const schema = this.getVfsFieldSchema(model) || {};
    const modelValue = this.getVfsFieldModel(model);
    const state = this.getVfsFieldState(model) || {};

    const fallbackValue = (typeof modelValue !== 'undefined') ? modelValue : null;
    const value = fieldOptions.value || fallbackValue;

    return {
      component: component || this.vfsComponents[field] || Vue.component(field),
      children: isArray
        ? children.reduce((flattenedChildren, child) => ([
          ...flattenedChildren,
          ...child.map(this.vfsHelperCreateField),
        ]), [])
        : children.map(this.vfsHelperCreateField),
      props: {
        ...options,
        ...fieldOptions,
        children,
        model,
        schema,
        state,
        uiSchema,
        value,
        vfsBus: this.vfsBus,
        vfsFieldOptions: fieldOptions,
        vfsModel: this.getVfsModel(),
        vfsState: this.getVfsState(),
        vfsFieldState: state,
        vfsFieldModel: value,
        vfsFieldModelKey: model,
        vfsFieldModelValue: value,
        vfsFieldSchema: schema,
        vfsFieldUiSchema: uiSchema,
      },
    };
  },
  vfsHelperApplyFieldModel(key, value) {
    const newVfsModel = Object.assign({}, this.getVfsModel());
    set(newVfsModel, key, value);
    return newVfsModel;
  },
  vfsHelperChildArrayMapper({ model, children = [], ...child }, parentModel, index) {
    return {
      ...child,
      model: this.vfsHelperGetChildArrayModelAtIndex(model, parentModel, index),
      children: this.vfsHelperChildArrayReducerMapper(parentModel, children, index),
    };
  },
  vfsHelperChildArrayReducerMapper(model, children = [], index) {
    return children.reduce((allChildren, child) => ([
      ...allChildren,
      this.vfsHelperChildArrayMapper(child, model, index),
    ]), []);
  },
  vfsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
    const relativeModel = this.vfsHelperGetRelativeModel(model, parentModel);
    return relativeModel ? `${parentModel}.${index}.${relativeModel}` : model;
  },
  vfsHelperGetRelativeModel(model, parentModel) {
    return model ? String(model).substr(parentModel.length + 1) : model;
  },
  vfsHelperFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfsFieldSchema(key);
    return schema ? schema.type === 'array' : false;
  },
  vfsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
};

export default vfsHelpers;
