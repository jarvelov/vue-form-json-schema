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

    const isArray = this.getVfsFieldIsArray(model);
    const schema = this.getVfsFieldSchema(model) || {};
    const modelValue = this.getVfsModel(model);

    const value = (typeof modelValue !== 'undefined')
      ? modelValue
      : null;

    return {
      Component: component || this.getVfsFieldComponent(field),
      children: isArray
        ? children.reduce((flattenedChildren, child) => ([
          ...flattenedChildren,
          ...child.map(this.getVfsField),
        ]), [])
        : children.map(this.getVfsField),
      props: {
        ...options,
        ...fieldOptions,
        children,
        model,
        schema,
        uiSchema,
        value,
        vfsBus: this.vfsBus,
        vfsModel: this.vfsModel,
        vfsFieldModel: value,
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
  getVfsSchemaPath(path, key) {
    if (!path) {
      if (this.vfsSchema.items) {
        return this.getVfsSchemaPath('items');
      }

      return `properties.${key}`;
    }

    const schema = get(this.vfsSchema, path);
    if (schema) {
      if (schema.type === 'array') {
        // TODO: Getting arrays to work we now have to ignore numeric keys
        // see more info in `getVfsUiFieldActive`
        if (this.vfsHelperIsNumber(key)) {
          return path;
        }

        const arrayPath = this.getVfsSchemaPath(`${path}.items`);
        return `${arrayPath}.${key}`;
      } else if (schema.type === 'object') {
        return this.getVfsSchemaPath(`${path}.properties`);
      }
    }

    if (!key) {
      return path;
    }

    return `${path}.${key}`;
  },
  getVfsSchemaFallback(key) {
    const keys = String(key).split('.');
    const schema = keys.reduce(this.getVfsSchemaPath, '');
    return get(this.vfsSchema, schema);
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
    if (this.getVfsSchema(key) || this.getVfsFieldModel(key)) {
      return true;
    }

    if (this.vfsSchema.dependencies) {
      return Object.keys(this.vfsSchema.dependencies).some(depKey =>
        this.getVfsFieldModelValid(depKey) &&
        this.checkValidFieldDependenciesForKey(this.vfsSchema.dependencies[depKey], key));
    }

    return false;
  },
  getVfsFieldIsArray(key) {
    if (!key) {
      return false;
    }

    const schema = this.getVfsFieldSchema(key);
    return schema ? schema.type === 'array' : false;
  },
  getVfsUiFieldActive(uiSchemaField) {
    if (!uiSchemaField.model || this.getVfsFieldActive(uiSchemaField.model)) {
      const { children = [] } = uiSchemaField;

      const isArray = this.getVfsFieldIsArray(uiSchemaField.model);
      if (isArray) {
        const vfsFieldModel = this.getVfsFieldModel(uiSchemaField.model) || [];
        // TODO: This is a bit of a hacky solution to get arrays to work
        // And it requires the getVfsSchemaPath function to ignore numeric keys
        const arrayChildren = vfsFieldModel
          .map((v, i) => (
            children.map(({ model, ...child }) => ({
              ...child,
              model: `${uiSchemaField.model}.${i}.${model}`,
            }))
          ))
          .map(this.getVfsUiFieldsActive);

        return {
          ...uiSchemaField,
          children: [...arrayChildren],
        };
      }

      return {
        ...uiSchemaField,
        children: this.getVfsUiFieldsActive(children),
      };
    }

    return false;
  },
  getVfsUiFieldsActive(fields) {
    return fields.reduce((newFields, field) => {
      const newField = this.getVfsUiFieldActive(field);
      if (newField) {
        newFields.push(newField);
      }

      return newFields;
    }, []);
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
  vfsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
};

export default vfsMethodsGettersMixin;
