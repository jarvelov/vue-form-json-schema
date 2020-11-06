import { get, merge } from 'lodash';

const vfjsUiGetters = {
  getVfjsFields(fields = []) {
    return fields.reduce(
      (vfjsFields, field) => [...vfjsFields, this.vfjsHelperCreateField(field)],
      [],
    );
  },
  getVfjsUiFieldVisible(field) {
    if (field.errorHandler) {
      if (!this.vfjsOptions.showValidationErrors) {
        const state = this.getVfjsFieldState(field.model);
        if (
          !state ||
          (state && (!state.vfjsFieldBlur || !state.vfjsFieldDirty))
        ) {
          return false;
        }
      }

      const value = this.getVfjsFieldModel(field.model);
      const schema = this.getVfjsFieldSchema(field.model);

      if (schema) {
        this.ajv.validate(schema, value);
        const oldErrors = this.ajv.errors ? this.ajv.errors : [];

        // Only continue if the errorHandlers field model has errors
        if (oldErrors.length === 0) {
          return false;
        }
      }
    }

    // If field does not have any displayOptions it should be visible
    if (!field.displayOptions) {
      return true;
    }

    // Get model and schema
    const { model, schema = {} } = field.displayOptions;

    // Get the field's model value
    // It will fall back to the full model if model is undefined
    const value =
      typeof model === 'undefined'
        ? this.getVfjsModel()
        : this.getVfjsFieldModel(model);

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
  getVfjsUiField(field) {
    if (this.getVfjsUiFieldVisible(field)) {
      const isArray = this.vfjsHelperFieldIsArray(field.model);
      const required = this.vfjsHelperFieldIsRequired(field.model);

      const dynamicProperties = this.vfjsHelperFieldDynamicProperties(field);
      const { children = [], ...fieldProperties } = merge(
        {},
        field,
        dynamicProperties,
      );

      if (isArray) {
        return {
          ...fieldProperties,
          required,
          children: this.getVfjsUiFieldArrayChildrenActive(
            field.model,
            children,
          ),
        };
      }

      return {
        ...fieldProperties,
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
