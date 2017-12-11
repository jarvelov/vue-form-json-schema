import { set } from 'lodash';
import vfjsFieldMixin from '../../../vfjs-field';

const vfjsHelpers = {
  vfjsHelperCreateField(vfjsFieldUiSchema) {
    const {
      children = [],
      component,
      model: vfjsFieldModelKey = '',
      fieldOptions = {},
    } = vfjsFieldUiSchema;

    const isArray = this.vfjsHelperFieldIsArray(vfjsFieldModelKey);

    const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
    const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
    const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey) || {};
    const vfjsFieldModelValue = this.getVfjsFieldModel(vfjsFieldModelKey);
    const vfjsState = this.getVfjsState();
    const vfjsModel = this.getVfjsModel();

    return {
      component: this.vfjsHelperCreateComponentWrapper(component, fieldOptions),
      children: isArray
        ? children.reduce((flattenedChildren, child) => ([
          ...flattenedChildren,
          ...child.map(this.vfjsHelperCreateField),
        ]), [])
        : children.map(this.vfjsHelperCreateField),
      props: {
        ...fieldOptions,
        children,
        value: vfjsFieldModelValue,
        model: vfjsFieldModel,
        modelKey: vfjsFieldModelKey,
        schema: vfjsFieldSchema,
        state: vfjsFieldState,
        uiSchema: vfjsFieldUiSchema,
        vfjsBus: this.vfjsBus,
        vfjsFieldOptions: fieldOptions,
        vfjsFieldModel,
        vfjsFieldModelKey,
        vfjsFieldModelValue,
        vfjsFieldSchema,
        vfjsFieldState,
        vfjsFieldUiSchema,
        vfjsModel,
        vfjsState,
      },
    };
  },
  vfjsHelperCreateComponentWrapper(component, fieldOptions) {
    if (typeof component === 'string' && component in this.vfjsComponents) {
      return this.vfjsHelperCreateComponentWrapper(
        this.vfjsComponents[component],
        fieldOptions,
      );
    }

    return {
      name: 'vue-form-json-schema-field-wrapper',
      mixins: [vfjsFieldMixin],
      render() {
        return this.$createElement(component, {
          ...this.vfjsAttributes,
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
