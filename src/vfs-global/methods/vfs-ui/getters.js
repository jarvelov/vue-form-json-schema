import { get } from 'lodash';

const vfsUiGetters = {
  getVfsUiFieldActiveDeep(obj, key) {
    if (!obj || !obj.properties) {
      return false;
    }

    if (obj[key] || obj.properties[key]) {
      return true;
    }

    // TODO: This could be resource intensive with large schemas
    // Investigate ways that it can be improved
    return Object.keys(obj.properties).some((propKey) => {
      if (this.getVfsFieldModelValid(propKey)) {
        return this.getVfsUiFieldActiveDeep(
          obj.properties[propKey].properties,
          key,
        );
      }

      return false;
    });
  },
  // TODO: When getVfsUiFieldActive is renamed, let getVfsFieldActive take that name
  getVfsFieldActive(key) {
    if (this.getVfsFieldSchema(key) || this.getVfsFieldModel(key)) {
      return true;
    }

    const vfsSchema = this.getVfsSchema();
    return this.getVfsUiFieldActiveDeep(vfsSchema.dependencies, key);
  },
  getVfsUiFieldArrayChildrenActive(model, children) {
    const vfsFieldModel = this.getVfsFieldModel(model) || [];

    return vfsFieldModel
      .map((v, i) => this.vfsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfsUiFieldsActive);
  },
  // TODO: Rename getVfsUiFieldActive to something else
  getVfsUiFieldActive({ children = [], model, ...field }) {
    if (!model || this.getVfsFieldActive(model)) {
      const isArray = this.vfsHelperFieldIsArray(model);

      if (isArray) {
        return {
          ...field,
          model,
          children: this.getVfsUiFieldArrayChildrenActive(model, children),
        };
      }

      return {
        ...field,
        model,
        children: this.getVfsUiFieldsActive(children),
      };
    }

    return false;
  },
  getVfsUiFieldsActive(fields) {
    return fields.reduce((newFields, field) => {
      if (field) {
        const newField = this.getVfsUiFieldActive(field);
        if (newField) {
          newFields.push(newField);
        }
      }

      return newFields;
    }, []);
  },
  getVfsFieldUiSchema(key) {
    return this.getVfsUiSchema(key);
  },
  getVfsUiSchema(key) {
    if (key) {
      return get(this.vfsUiSchema, key);
    }

    return this.vfsUiSchema;
  },
};

export default vfsUiGetters;
