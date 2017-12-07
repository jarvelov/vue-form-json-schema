import { get, set } from 'lodash';

const vfsMethodsGettersMixin = {
  getVfsField(uiSchema) {
    const {
      children = [],
      component,
      model = '',
      field,
      fieldOptions = {},
      ...options
    } = uiSchema;

    const isArray = this.getVfsFieldIsArray(model);
    const schema = this.getVfsFieldSchema(model) || {};
    const modelValue = this.getVfsFieldModel(model);
    const state = this.getVfsFieldState(model) || {};


    const fallbackValue = (typeof modelValue !== 'undefined') ? modelValue : null;
    const value = fieldOptions.value || fallbackValue;

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
        state,
        vfsBus: this.vfsBus,
        vfsModel: this.vfsModel,
        vfsState: this.vfsState,
        vfsFieldState: state,
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
  getVfsState(key) {
    if (key) {
      return get(this.vfsState, key);
    }

    return this.vfsState;
  },
  getVfsSchema(key) {
    if (key) {
      return get(this.getVfsSchema.properties, key) || this.getVfsSchemaFallback(key);
    }

    return this.vfsSchema;
  },
  getVfsSchemaPath(path, key) {
    const vfsSchema = this.getVfsSchema();

    if (!path) {
      if (vfsSchema.items) {
        return this.getVfsSchemaPath('items');
      }

      return `properties.${key}`;
    }

    const schema = get(vfsSchema, path);
    if (schema) {
      if (schema.type === 'array') {
        if (this.vfsHelperIsNumber(key)) {
          const arrayIndexPath = this.getVfsSchemaPath(`${path}.items`);
          return `${arrayIndexPath}.${key}`;
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
    return get(this.getVfsSchema(), schema);
  },
  getValidFieldDependenciesForKey(obj, key) {
    if (!obj || !obj.properties) {
      return false;
    }

    if (obj[key] || obj.properties[key]) {
      return true;
    }

    return Object.keys(obj.properties).some((propKey) => {
      if (this.getVfsFieldModelValid(propKey)) {
        return this.getValidFieldDependenciesForKey(
          obj.properties[propKey].properties,
          key,
        );
      }

      return false;
    });
  },
  getVfsFieldActive(key) {
    if (this.getVfsFieldSchema(key) || this.getVfsFieldModel(key)) {
      return true;
    }

    const vfsSchema = this.getVfsSchema();
    if (vfsSchema.dependencies) {
      return Object.keys(vfsSchema.dependencies).some(depKey =>
        this.getVfsFieldModelValid(depKey) &&
        this.getValidFieldDependenciesForKey(vfsSchema.dependencies[depKey], key));
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
  getVfsUiFieldArrayChildrenActive(model, children) {
    const vfsFieldModel = this.getVfsFieldModel(model) || [];

    return vfsFieldModel
      .map((v, i) => (
        children.map(({ model: childModel, ...child }) => ({
          ...child,
          model: `${model}.${i}.${childModel}`,
        }))
      ))
      .map(this.getVfsUiFieldsActive);
  },
  getVfsUiFieldActive({ children = [], model, ...field }) {
    if (!model || this.getVfsFieldActive(model)) {
      const isArray = this.getVfsFieldIsArray(model);
      if (isArray) {
        return {
          ...field,
          model,
          children: [
            ...this.getVfsUiFieldArrayChildrenActive(model, children),
          ],
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
  getVfsFieldModelValid(key, value) {
    const errors = this.getVfsFieldModelValidationErrors(key, value);
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

    const data = typeof value !== 'undefined' ? value : this.getVfsFieldModel(key);
    const valid = this.ajv.validate(schema, data);

    if (!valid) {
      return this.ajv.errors;
    }

    return [];
  },
  getVfsUiSchema(key) {
    if (key) {
      return get(this.vfsUiSchema, key);
    }

    return this.vfsUiSchema;
  },
  getVfsValid() {
    const errors = this.getVfsValidationErrors();
    return errors.length === 0;
  },
  getVfsValidationErrors(model) {
    const valid = this.ajv.validate(this.getVfsSchema(), model || this.getVfsModel());
    return (!valid) ? this.ajv.errors : [];
  },
  vfsHelperIsNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n));
  },
  vfsHelperApplyFieldModel(key, value) {
    const newVfsModel = Object.assign({}, this.getVfsModel());
    set(newVfsModel, key, value);
    return newVfsModel;
  },
};

export default vfsMethodsGettersMixin;
