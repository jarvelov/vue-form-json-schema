# Value prop

Sets the property to which the field's `model` value is passed. Default is `value`.

## Example

```js
data() {
  return {
    uiSchema: [{
      component: 'restaurants-component',
      model: 'input',
      valueProp: 'restaurants',
      fieldOptions: {
        on: ['input']
      }
    }]
  }
}
```
