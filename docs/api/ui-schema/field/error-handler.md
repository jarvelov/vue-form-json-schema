# Error handler

`errorHandler` is a Boolean, which is set to true for fields which should handle the error messages for a model.
The component will get the the same props as any other component but it cannot receive any [children](children.md) as the default slot is populated by the rendered `errors`.

The errors are passed as the default slot are rendered individually as a `<div>`.
If you want to render them differently you can handle the errors in the `vfjsFieldErrors` prop yourself. This is an array of the [Ajv validation errors](https://github.com/epoberezkin/ajv#validation-errors)

## Example

```js
data() {
  return {
    jsonSchema: {
      type: 'object',
      required: ['input1'],
      properties: {
        input1: {
          type: 'string',
          minLength: 1 // Value has to be at least 1 character
        }
      }
    },
    uiSchema: [{
      component: 'input',
      model: 'input1',
      fieldOptions: {
        // Optionally set the attributes on the dom element as well
        // This can be used to let the browser validate the form
        //
        // If you don't want the browser to validate the form
        // use the `novalidate` attribute on <vue-form-json-schema/>
        attrs: {
          // Set required attribute on the dom element
          required: true
          // Set minlength attribute
          minlength: 1
        },
        on: ['change']
      }
    }, {
      // This component takes care of the errors from `input1`
      // If the form is submitted with the input being empty the error handler
      // will render the errors inside it
      component: 'div',
      model: 'input1',
      errorHandler: true,
      fieldOptions: {
        class: ['bg-danger']
      }
    }]
  }
}
```
