# ajv

Options to configure `Ajv`. A list of all [supported options can be found here](https://ajv.js.org/#options)

## Default value

```js
{
  keywords: {},
  plugins: [],
  locale: null,
  options: {
    allErrors: true;
  }
}
```

> Ajv option `allErrors` is always set to true, there is no way to override this as it is used internally for validation

## Examples

### Enable $data references

See [Ajv's documentation about $data references](https://ajv.js.org/#data-reference) for more details.
`$data` in this example can be substituted for any other [supported Ajv option](https://ajv.js.org/#options)

```js
  data() {
    return {
      options: {
        ajv: {
          options: {
            $data: true
          }
        }
      },
      model: {
        ...
      },
      jsonSchema: {
        ...
      },
      uiSchema: [
        ...
      ]
    }
  }
```

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :options="options"
    :schema="jsonSchema"
    :ui-schema="uiSchema"
  />
</template>
```

### Localize error messages

This example uses [ajv-i18n](https://github.com/epoberezkin/ajv-i18n).
Any errors will be translated using the locale function provided before the fields gets access to them.

```js
// Import swedish localization
const sv = require('ajv-i18n/localize/sv');

export default {
  data() {
    return {
      options: {
        ajv: {
          locale: sv
        }
      },
      model: {
        ...
      },
      jsonSchema: {
        ...
      },
      uiSchema: [
        ...
      ]
    }
  }
}
```

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :options="options"
    :schema="jsonSchema"
    :ui-schema="uiSchema"
  />
</template>
```

### Add Ajv keywords

In this example we will add a custom keyword which checks that the value of the input is not present in the `blacklist` array

```js
// These values are forbidden
const blacklist = ['forbidden', 'values'];

export default {
  data() {
    return {
      options: {
        ajv: {
          keywords: {
            notBlackListed: {
              // Needs to be set to true for the validate function to be able to add custom errors
              errors: true,
              validate: (schema, value) => {
                // This is what Ajv wants, and it's terrible.
                // There is no way to add custom error messages without
                // modifying the validate function's `errors` property
                const self = this.options.ajv.keywords.notBlackListed.validate;

                // Create an empty array to hold any errors
                self.errors = [];

                if (this.blacklist.indexOf(value) >= 0) {
                  // This value is blacklisted
                  self.errors.push({
                    message: 'Value is blacklisted!',
                    keyword: 'uniqueLabel',
                    params: {
                      keyword: 'uniqueLabel',
                    },
                  });
                }

                // Ajv needs a boolean value returned to determine if the validation was a success
                // If true is returned, no error is generated, even if the errors array is populated
                return self.errors.length === 0;
              },
            },
          },
        },
      },
      model: {},
      jsonSchema: {
        type: 'object',
        properties: {
          myValue: {
            type: 'string',
            notBlackListed: true,
          },
        },
      },
      uiSchema: [
        {
          component: 'input',
          model: 'myValue',
          fieldOptions: {
            on: ['change'],
          },
        },
        // This component will output all the errors for myValue model
        {
          component: 'div',
          errorHandler: true,
          model: 'myValue',
        },
      ],
    };
  },
};
```

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :options="options"
    :schema="jsonSchema"
    :ui-schema="uiSchema"
  />
</template>
```

### Extend Ajv instance

Note that this is neither tested nor supported but in theory this would give extra Ajv features such as [ajv-async](https://github.com/epoberezkin/ajv-async) and [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch) access to the internal `Ajv` instance running inside `vue-form-json-schema`.

By adding the required plugin to the `plugins` section in the ajv options it is possible to load and apply the required plugin to the ajv instance that is used by `vue-form-json-schema`. This comes in handy when custom error messages must be added with [ajv-errors](https://github.com/epoberezkin/ajv-errors).

```js
// Import ajv-errors plugin
const ajvErrors = require('ajv-errors');

export default {
  data() {
    return {
      options: {
        ajv: {
          plugins: {
            ajvErrors
          }
        }
      },
      model: {
        ...
      },
      jsonSchema: {
        ...
      },
      uiSchema: [
        ...
      ]
    }
  }
}
```

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :options="options"
    :schema="jsonSchema"
    :ui-schema="uiSchema"
  />
</template>
```
