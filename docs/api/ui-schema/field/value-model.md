# Value model

Sets which field's model value is passed down as the `value` prop. Default is the same as the field set in the `model` property.
This is useful if you want to use another field's `model` as the value for another field. Note that the [valueProp](./value-prop.md) can set the `valueModel` to be passed to another prop than `value`.

You can also use `valueModel: true` to pass the entire form model to the field.

## Example

This example

```js
data() {
  return {
    model: {
      options:  ['Cat', 'Dog', 'Rabbit'],
      selectedOptions: [],
    },
    uiSchema: [
      {
        component: 'custom-select',
        model: 'selectedOptions', , // This sets what property in the form model is passed to this component's 'value' prop and by default this property is the one which will be updated when the 'change' event is emitted
        valueModel: 'options', // This overrides what property in the form model will be passed to this component, the default is to pass it to the 'value' prop
        valueProp: 'options', // This overrides the prop to which the field's model will be passed and sets it to 'options', this prop will receive the value of 'valueModel' if it is set, or else it will receive the normal 'model' value
        fieldOptions: {
          on: ['change'],
        },
      }
    ]
  }
}
```
