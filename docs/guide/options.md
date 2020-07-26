# options

| Property             | Type    | Description                                                     | Default         |
| -------------------- | ------- | --------------------------------------------------------------- | --------------- |
| allowInvalidModel    | Boolean | If `false` and validation fails the model will not be updated   | true            |
| validate             | Boolean | Enable/disable validation                                       | true            |
| validateOnLoad       | Boolean | Perform a validation after the component has loaded (`created`) | true            |
| showValidationErrors | Boolean | Show validation errors                                          | false           |
| castToSchemaType     | Boolean | Cast values to the type specified for the model in the schema.  | false           |
| valueProp            | String  | Which prop will get passed the model                            | 'value'         |
| ajv                  | Object  | Options for [Ajv](https://github.com/epoberezkin/ajv)           | [See ajv](#ajv) |

## ajv

This object provides a way to configure `Ajv`. A list of all [supported options can be found here](https://ajv.js.org/#options)
The default object is as follows:

```js
{
  keywords: {}, // Add custom keywords here
  plugins: [], // Add plugins such as ajv-merge-patch here
  locale: null, // Provide a locale from ajv-i18n here, see example below
  options: {
    // Ajv option `allErrors` is always set to true,
    // there is no way to override this as it is used internally for validation
    allErrors: true,
  }
}
```

### Examples

#### Enable \$data references

See [Ajv's documentation about \$data references](https://ajv.js.org/#data-reference) for more details.
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
      schema: {
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
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>
```

#### Localize error messages

This example uses [ajv-i18n](https://github.com/epoberezkin/ajv-i18n).
Any errors will be translated using the locale function provided before the fields gets access to them.

```js
// Import swedish localization
import sv from 'ajv-i18n/localize/sv';

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
      schema: {
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
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>
```

#### Add Ajv keywords

In this example we will add a custom keyword which checks that the value of the input is not present in the `blacklist` array. For more information about how to add your own keywords check out the [Ajv keyword documentation](https://ajv.js.org/custom.html).

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
                // There is no way to add custom error messages without
                // modifying the validate function's `errors` property.
                // This is what Ajv wants, and it's terrible, but it is what it recommends.
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
      schema: {
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
      model: {},
    };
  },
};
```

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :options="options"
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>
```

#### Extend Ajv instance

Note that this is not extensively tested and might break in upgrades. The long term goal is to support as many Ajv plugins as possible. Please [open an issue]() if you run into an Ajv package which does not work. Plugins provides extra Ajv features such as [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) and [ajv-merge-patch](https://github.com/epoberezkin/ajv-merge-patch). access to the internal `Ajv` instance running inside `vue-form-json-schema`.

By adding the required plugin to the `plugins` section in the ajv options it is possible to load and apply the required plugin to the ajv instance that is used by `vue-form-json-schema`. This comes in handy, for example when you want to customize error messages with [ajv-errors](https://github.com/epoberezkin/ajv-errors).

```js
// Import ajv-errors plugin
import ajvErrors from 'ajv-errors';

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
      schema: {
        type: 'object',
        required: ['age'],
        properties: {
          age: {
            type: 'integer',
            minimum: 18
          }
        },
        errorMessage: {
         properties: {
           age: 'You must be at least 18 years old to submit this form',
         }
       },
      },
      model: {
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
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>
```
