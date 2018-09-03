import { get } from 'lodash';

const vfjsUiGetters = {
  getVfjsFields(fields = []) {
    return fields.reduce((reducedFields, field, index) => {
      const newFields = [...reducedFields];

      const hash = this.vfjsHelperGetFieldRuntimeHash(field);
      const vfjsField = this.vfjsHelperGetVfjsFieldByHash(hash);
      if (vfjsField) {
        // console.log('reuse');
        newFields.push({
          ...vfjsField,
          children: this.getVfjsFields(field.children),
          hash,
        });
      } else {
        newFields.push({
          ...this.vfjsHelperCreateField(field),
          hash,
        });
      }

      return newFields;
    }, []);
  },
  getVfjsUiFieldVisible(field) {
    if (!field.displayOptions) {
      return true;
    }

    // Get model and schema
    const { model, schema = {} } = field.displayOptions;

    // Get the field's model
    // It will fall back to the full model if model is undefined
    const value =
      typeof model === 'undefined' ? this.getVfjsModel() : this.getVfjsFieldModel(model);

    // Validate and check if we got any errors
    // const errors = model
    //   ? this.getVfjsValidationErrors(value, schema)
    //   : this.getVfjsModelValidationErrors(model, value, schema);

    // TODO: There's something wrong with the evaluation done in getVfjsValidationErrors
    // Temporarily revert back to old behaviour with validating in this function
    this.ajv.validate(schema, value);
    const oldErrors = this.ajv.errors ? this.ajv.errors : [];

    return oldErrors.length === 0;
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
