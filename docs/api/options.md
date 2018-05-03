# Options

| Property                   | Value   | Description                                                     | Default                          |
| -------------------------- | ------- | --------------------------------------------------------------- | -------------------------------- |
| allowInvalidModel          | Boolean | If `false` and validation fails the model will not be updated   | true                             |
| validate                   | Boolean | Enable/disable validation                                       | true                             |
| validateOnLoad             | Boolean | Perform a validation after the component has loaded (`created`) | true                             |
| [ajv](options/ajv.md) | object  | Options for [Ajv](https://github.com/epoberezkin/ajv)                                                 | [See ajv](options/ajv.md) |
