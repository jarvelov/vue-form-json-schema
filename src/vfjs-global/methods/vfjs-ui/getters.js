import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsUiFieldActiveDeep(obj, key) {
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
        return this.getVfjsUiFieldActiveDeep(
          obj.properties[propKey].properties,
          key,
        );
      }

      return false;
    });
  },
  // TODO: When getVfjsUiFieldActive is renamed, let getVfjsFieldActive take that name
  getVfjsFieldActive(key) {
    if (this.getVfjsFieldSchema(key) || this.getVfjsFieldModel(key)) {
      return true;
    }

    const vfjsSchema = this.getVfjsSchema();
    return Object.keys(vfjsSchema.dependencies).some(depKey => (
      this.getVfjsFieldModelValid(depKey) &&
      this.getVfjsUiFieldActiveDeep(vfjsSchema.dependencies[depKey], key)
    ));
  },
  getVfjsUiFieldArrayChildrenActive(model, children) {
    const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

    return vfjsFieldModel
      .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfjsUiFieldsActive);
  },
  // TODO: Rename getVfjsUiFieldActive to something else
  getVfjsUiFieldActive({ children = [], model, ...field }) {
    if (!model || this.getVfjsFieldActive(model)) {
      const isArray = this.vfjsHelperFieldIsArray(model);

      if (isArray) {
        return {
          ...field,
          model,
          children: this.getVfjsUiFieldArrayChildrenActive(model, children),
        };
      }

      return {
        ...field,
        model,
        children: this.getVfjsUiFieldsActive(children),
      };
    }

    return false;
  },
  getVfjsUiFieldsActive(fields) {
    return fields.reduce((newFields, field) => {
      if (field) {
        const newField = this.getVfjsUiFieldActive(field);
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
