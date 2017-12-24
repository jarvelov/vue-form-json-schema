# Error handler

`errorHandler` is a Boolean, which is set to true for fields which should handle the error messages for a model.
The component will get the the same props as any other component but it cannot receive any [children](children.md) as the default slot is populated by the rendered `errors`.

The errors are passed as the default slot are rendered individually as a `<div>`.
If you want to render them differently you can handle the errors in the `vfjsFieldErrors` prop yourself. This is an array of the [Ajv validation errors](https://github.com/epoberezkin/ajv#validation-errors)

## Example

```js
uiSchema() {
  return [{
    component: 'div',
    model: 'input1',
    errorHandler: true,
    fieldOptions: {
      class: ['bg-danger']
    }
  }]
}
```
