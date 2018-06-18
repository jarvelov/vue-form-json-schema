# Error options

Same API as [fieldOptions](fieldOptions.md) but is only applied when the field has errors and has been modified.

## Example

```js
data() {
  return {
    uiSchema: [{
      component: 'input',
      model: 'input1',
      errorOptions: {
        class: ['is-invalid']
      },
      fieldOptions: {
        class: ['form-control'],
        on: ['input']
      }
    }]
  }
}
```
