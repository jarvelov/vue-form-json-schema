# schema

Accepts a valid [JSON Schema](http://json-schema.org).

Good resources if you are new to JSON Schema is:

- [Understanding JSON schema](https://json-schema.org/understanding-json-schema) **&larr; Highly recommended**
- [Online JSON schema validator](http://jsonschemavalidator.net)
- [Ajv documentation (internal JSON schema validation engine)](https://epoberezkin.github.io/ajv/)
- [Ajv github](https://github.com/epoberezkin/ajv)

## Basic examples

### Schema with one required field

```js
{
  type: 'object',
  required: ['firstName'],
  properties: {
    firstName: {
      type: "string"
    }
  }
}
```

### Schema with regex pattern

You can use the `pattern` keyword to use regex expressions. In this example we ensure that the value confirms to a the pattern: `[XXX-000]`

```js
{
  type: 'object',
  required: ['age'],
  properties: {
    age: {
      type: "string",
      pattern: "^([A-Z]{3})-([\d]{3})$"
    }
  }
}
```

Note that [JSON Schema only implements a subset](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html) of the syntax supported in [ECMA262](https://www.ecma-international.org/publications/standards/Ecma-262.htm).  If your regex needs exceed what is possible with the built in regex you can use the `regexp` keyword from the [ajv-keywords](https://github.com/ajv-validator/ajv-keywords) package to get ECMA262 compliant regex validation. See the [Extend Ajv instance](./options.md#extend-ajv-instance) to learn how to add the package to the Ajv instance within `vue-form-json-schema`

For more complex schemas check out the [examples](./examples) or [Understanding JSON schema](https://json-schema.org/understanding-json-schema)
