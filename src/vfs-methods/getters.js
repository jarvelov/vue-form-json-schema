import { get } from 'lodash';

const vfsMethodsGettersMixin = {
  getVfsField(uiSchema) {
    const {
      children = [],
      component,
      model = '',
      field,
      fieldOptions,
      ...options
    } = uiSchema;

    const schema = this.getVfsFieldSchema(model);
    return {
      Component: component || this.getVfsFieldComponent(field),
      children: children.map(this.getVfsField),
      props: {
        ...options,
        ...fieldOptions,
        children,
        model,
        schema,
        uiSchema,
        value: this.getVfsModel(model),
        vfsBus: this.vfsBus,
        vfsModel: this.vfsModel,
        vfsFieldModelKey: model,
        vfsFieldSchema: schema,
        vfsFieldUiSchema: uiSchema,
      },
    };
  },
  getVfsFieldSchema(key) {
    if (key) {
      return this.getVfsSchema(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsSchema(this.vfsFieldModelKey)
      : null;
  },
  getVfsSchema(key) {
    if (key) {
      return get(this.getVfsSchema.properties, key) || this.getVfsSchemaFallback(key);
    }

    return this.vfsSchema;
  },
  getVfsSchemaFallback(key) {
    const keys = key.split('.');
    const jsonSchemaPath = keys.reduce((path, subPath) => {
      if (path) {
        return `${path}.properties.${subPath}`;
      }

      return `properties.${subPath}`;
    }, '');

    return get(this.vfsSchema, jsonSchemaPath);
  },
  checkValidFieldDependenciesForKey(obj, key) {
    if (!obj || !obj.properties) {
      return false;
    }

    if (obj[key] || obj.properties[key]) {
      return true;
    }

    return Object.keys(obj.properties).some((propKey) => {
      if (this.getVfsFieldModelValid(propKey)) {
        return this.checkValidFieldDependenciesForKey(
          obj.properties[propKey].properties,
          key,
        );
      }

      return false;
    });
  },
  getVfsFieldActive(key) {
    if (this.getVfsSchema(key)) {
      return true;
    }

    return Object.keys(this.vfsSchema.dependencies).some(depKey =>
      this.getVfsFieldModelValid(depKey) &&
      this.checkValidFieldDependenciesForKey(this.vfsSchema.dependencies[depKey], key));
  },
  getVfsUiFieldActive(uiSchemaField) {
    if (!uiSchemaField.model || this.getVfsFieldActive(uiSchemaField.model)) {
      return {
        ...uiSchemaField,
        children: (uiSchemaField.children)
          ? uiSchemaField.children.reduce((children, child) => {
            const newChild = this.getVfsUiFieldActive(child);
            if (newChild) {
              children.push(newChild);
            }

            return children;
          }, [])
          : [],
      };
    }

    return false;
  },
  getVfsFieldComponent(key) {
    return this.vfsComponents[key];
  },
  getVfsFieldModel(key) {
    if (key) {
      return this.getVfsModel(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsModel(this.vfsFieldModelKey)
      : null;
  },
  getVfsFieldModelValid(key) {
    // TODO: Do validation
    const errors = this.getVfsFieldModelValidationErrors(key);
    return errors.length === 0;
  },
  getVfsFieldModelValidationErrors(key, value) {
    return this.getVfsModelValidationErrors(key, value);
  },
  getVfsFieldState(key) {
    if (key) {
      return this.getVfsState(key);
    }

    return this.vfsFieldModelKey
      ? this.getVfsState(this.vfsFieldModelKey)
      : null;
  },
  getVfsFieldUiSchema(key) {
    return this.getVfsUiSchema(key);
  },
  getVfsFieldUiSchemaValid(uiSchema) {
    return (
      this.getVfsFieldUiSchemaValidationErrors(uiSchema).length === 0 &&
      uiSchema.children.every(this.getVfsFieldUiSchemaValid)
    );
  },
  getVfsFieldUiSchemaValidationErrors({ component, model, type }) {
    const errors = [];

    if (!component && !this.getVfsFieldComponent(type)) {
      errors.push(`Unregistered component type: ${type}`);
    }

    if (model && !(String(model) === model)) {
      errors.push('The field\'s "model" property must be a string!');
    }

    return errors;
  },
  getVfsModel(key) {
    if (key) {
      return get(this.vfsModel, key);
    }

    return this.vfsModel;
  },
  getVfsModelValidationErrors(key, value) {
    const schema = key ? this.getVfsFieldSchema(key) : this.vfsSchema;

    const data = value || this.getVfsFieldModel(key);
    const valid = this.ajv.validate(schema, data);

    if (!valid) {
      return this.ajv.errors;
    }

    return [];
  },
  getVfsState(key) {
    if (key) {
      return get(this.vfsState, key);
    }

    return this.vfsState;
  },
  getVfsUiSchema(key) {
    if (key) {
      return get(this.vfsUiSchema, key);
    }

    return this.vfsUiSchema;
  },
  getVfsValidationErrors() {
    return this.vfsUiSchema.map(this.getVfsFieldModelValidationErrors);
  },
  vfsHelperObjectLoop(obj, cb) {
    if (!obj && typeof obj !== 'object') {
      return null;
    }

    if (cb(obj)) {
      return obj;
    }

    return Object.keys(obj).reduce((result, key) => {
      const value = obj[key];

      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          return value.find(subValue => this.vfsHelperObjectLoop(subValue, cb));
        } else if (value.properties) {
          return this.vfsHelperObjectLoop(value.properties, cb);
        }

        return this.vfsHelperObjectLoop(value, cb);
      }

      return result;
    }, false);
  },
};

export default vfsMethodsGettersMixin;
