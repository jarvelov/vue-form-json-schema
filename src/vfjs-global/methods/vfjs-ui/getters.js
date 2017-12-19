import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsUiFieldShow({ model, schema }) {
    const value = this.getVfjsModel(model);
    if (typeof value === 'undefined') {
      return false;
    }

    this.ajv.validate({
      type: 'object',
      properties: {
        [model]: schema,
      },
    }, {
      [model]: value,
    });

    const errors = (this.ajv.errors) ? this.ajv.errors : [];
    return errors.length === 0;
  },
  getVfjsUiFieldActive(field) {
    if (field.show) {
      return Array.isArray(field.show)
        ? field.show.some(this.getVfjsUiFieldShow)
        : this.getVfjsUiFieldShow(field.show);
    }

    if (!field.model || this.getVfjsFieldSchema(field.model)) {
      return true;
    }

    return false;
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
          const objString = JSON.stringify({ newField, index });
          const id = this.vfjsHelperHashString(objString);

          newFields.push({
            ...newField,
            id,
          });
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
