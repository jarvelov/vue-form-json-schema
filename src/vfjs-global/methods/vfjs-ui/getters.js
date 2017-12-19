import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsUiFieldShow({ model, schema }) {
    const value = this.getVfjsFieldModel(model);
    this.ajv.validate(schema, value);
    // console.log(model, schema, value, this.ajv.errors);
    const errors = (this.ajv.errors) ? this.ajv.errors : [];

    return errors.length === 0;
  },
  getVfjsUiFieldActive(field) {
    return (field.show)
      ? this.getVfjsUiFieldShow(field.show)
      : true;
  },
  getVfjsUiFieldArrayChildrenActive(model, children) {
    const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

    return vfjsFieldModel
      .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfjsUiFieldsActive);
  },
  getVfjsUiField({ children = [], model, ...field }) {
    if (this.getVfjsUiFieldActive(field)) {
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
