import { get, merge } from 'lodash';

const vfjsUiGetters = {
  getVfjsFields(fields = []) {
    return fields.reduce(
      (vfjsFields, field) => [...vfjsFields, this.vfjsHelperCreateField(field)],
      [],
    );
  },
  getVfjsUiFieldVisible(field) {
    return new Promise((resolve) => {
      if (field.errorHandler) {
        if (!this.vfjsOptions.showValidationErrors) {
          const state = this.getVfjsFieldState(field.model);
          if (!state || (state && (!state.vfjsFieldBlur || !state.vfjsFieldDirty))) {
            return resolve({
              isErrorHandler: true,
              hasErrors: false
            });
          }
        }

        const value = this.getVfjsFieldModel(field.model);
        const schema = this.getVfjsFieldSchema(field.model);

        if (schema) {
          if (!schema.$async) {
            schema.$async = true;
          }

          return this.ajv.validate(schema, value)
            .then(valid => {
              const oldErrors = valid.errors ? valid.errors : [];
              // Only continue if the errorHandlers field model has errors
              return resolve({
                isErrorHandler: true,
                hasErrors: oldErrors.length > 0
              });
            })
            .catch(valid => {
              const oldErrors = valid.errors ? valid.errors : [];
              // Only continue if the errorHandlers field model has errors
              return resolve({
                isErrorHandler: true,
                hasErrors: oldErrors.length > 0
              });
            });
        }
      }

      return resolve({
        isErrorHandler: false,
        hasErrors: false
      });
    }).then((uiField) => {
      if (!uiField.isErrorHandler || (uiField.isErrorHandler && uiField.hasErrors)) {
        // If field does not have any displayOptions it should be visible
        if (!field.displayOptions) {
          return true;
        }

        // Get model and schema
        const { model, schema = {} } = field.displayOptions;

        // Get the field's model value
        // It will fall back to the full model if model is undefined
        const value = typeof model === 'undefined' ? this.getVfjsModel() : this.getVfjsFieldModel(model);

        if (!schema.$async) {
          schema.$async = true;
        }
        return this.ajv.validate(schema, value)
          .then(valid => {
            return true;
          }).catch(valid => {
            return false;
          });
      }
    });
  },
  getVfjsUiFieldArrayChildrenActive(model, children) {
    const vfjsFieldModel = this.getVfjsFieldModel(model) || [];

    return vfjsFieldModel
      .map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i))
      .map(this.getVfjsUiFieldsActive);
  },
  getVfjsUiField(field) {
    return this.getVfjsUiFieldVisible(field)
      .then(isFieldVisible => {
        if (isFieldVisible) {
          const isArray = this.vfjsHelperFieldIsArray(field.model);
          const required = this.vfjsHelperFieldIsRequired(field.model);

          return this.vfjsHelperFieldDynamicProperties(field)
            .then(dynamicProperties => {
              const { children = [], ...fieldProperties } = merge({}, field, dynamicProperties);

              if (isArray) {
                return Promise.resolve({
                  ...fieldProperties,
                  required,
                  children: this.getVfjsUiFieldArrayChildrenActive(field.model, children),
                });
              }

              return this.getVfjsUiFieldsActive(children)
                .then(fieldChildren => {
                  return {
                    ...fieldProperties,
                    required,
                    children: fieldChildren,
                  };
                });
            });
        }

        return Promise.resolve(false);
      });
  },
  getVfjsUiFieldsActive(fields) {
    return fields.reduce((newFieldsPromise, field, index) => {
      return newFieldsPromise.then((newFields) => {
        if (field) {
          return this.getVfjsUiField(field)
            .then(newField => {
              if (newField) {
                newFields.push(newField);
              }

              return newFields;
            })
        }

        return newFields;
      });
    }, Promise.resolve([]));
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
