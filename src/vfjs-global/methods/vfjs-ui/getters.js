import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsUiFieldDeep(obj, key) {
    if (!obj || !obj.properties) {
      return false;
    }

    if (obj[key] || obj.properties[key]) {
      return true;
    }

    // TODO: This could be resource intensive with large schemas
    // Investigate ways that it can be improved
    return Object.keys(obj.properties).some((propKey) => {
      if (this.getVfjsFieldModelValid(propKey)) {
        return this.getVfjsUiFieldDeep(
          obj.properties[propKey].properties,
          key,
        );
      }

      return false;
    });
  },
  // TODO: When getVfjsUiField is renamed, let getVfjsUiFieldActive take that name
  getVfjsUiFieldActive(key) {
    if (!key || this.getVfjsFieldSchema(key)) {
      return true;
    }

    const { dependencies = {} } = this.getVfjsSchema();
    return Object.keys(dependencies).some((fieldKey) => {
      const vfjsFieldState = this.getVfjsFieldState(fieldKey);
      if ((!vfjsFieldState || !vfjsFieldState.$dirty)) {
        return false;
      }

      return (
        typeof this.getVfjsFieldModel(fieldKey) !== 'undefined' &&
        this.getVfjsFieldModelValid(fieldKey) &&
        this.getVfjsUiFieldDeep(dependencies[fieldKey], key)
      );
    });
  },
  getVfjsUiFieldArrayChildrenActive(model, children) {
    const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

    return vfjsFieldModel
      .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfjsUiFieldsActive);
  },
  getVfjsUiField({ children = [], model, ...field }) {
    if (this.getVfjsUiFieldActive(model)) {
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
