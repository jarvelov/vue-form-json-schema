# Options

| Property                   | Value   | Description                                                     | Default                          |
| -------------------------- | ------- | --------------------------------------------------------------- | -------------------------------- |
| allowInvalidModel          | Boolean | If `false` and validation fails the model will not be updated   | true                             |
| validate                   | Boolean | Enable/disable validation                                       | true                             |
| validateOnLoad             | Boolean | Perform a validation after the component has loaded (`created`) | true                             |
| showValidationErrors       | Boolean | Show validation errors                                          | false                             |
| castToSchemaType           | Boolean | Cast values to the type specified for the model in the schema.  | false                            |
| valueProp                  | String | Which prop will get passed the model                            | 'value'                             |
| [ajv](options/ajv.md) | Object  | Options for [Ajv](https://github.com/epoberezkin/ajv)                                                 | [See ajv](options/ajv.md) |
