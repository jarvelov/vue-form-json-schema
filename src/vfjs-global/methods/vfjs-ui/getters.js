import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsUiFieldVisible(field) {
    if (!field.displayOptions) {
      return true;
    }

    // Get model and schema
    const { model, schema } = field.displayOptions;

    // Get the field's model
    // It will fall back to the full model if model is undefined
    const value = this.getVfjsFieldModel(model);

    // Validate and check if we got any errors
    this.ajv.validate(schema, value);
    const errors = this.ajv.errors ? this.ajv.errors : [];

    return errors.length === 0;
  },
  getVfjsUiFieldArrayChildrenActive(model, children) {
    const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

    return vfjsFieldModel
      .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfjsUiFieldsActive);
  },
  getVfjsUiField({ children = [], model, ...field }) {
    if (this.getVfjsUiFieldVisible(field)) {
      const isArray = this.vfjsHelperFieldIsArray(model);
      const required = this.vfjsHelperFieldIsRequired(model);

      if (isArray) {
        return {
          ...field,
          model,
          required,
          children: this.getVfjsUiFieldArrayChildrenActive(model, children),
        };
      }

      return {
        ...field,
        model,
        required,
        children: this.getVfjsUiFieldsActive(children),
      };
    }

    return false;
  },
  getVfjsUiFieldsActive(fields) {
    return fields.reduce((newFields, field, index) => {
      if (field) {
        const newField = this.getVfjsUiField(field);
        if (newField) {
          newFields.push(newField);
        }
      }

      return newFields;
    }, []);
  },
  getVfjsFieldUiSchema(key) {
    return this.getVfjsUiSchema(key);
  },
  getVfjsUiSchema(key) {
    if (key) {
      return get(this.vfjsUiSchema, key);
    }

    return this.vfjsUiSchema;
  },
};

export default vfjsUiGetters;
