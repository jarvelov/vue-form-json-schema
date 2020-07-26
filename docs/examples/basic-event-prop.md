# Specify event property to use as value

When a [field's](../guide/ui-schema.md) component emits an [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) `vue-form-json-schema` detects this and automatically emits the `event.target.value` instead. This works for most components, but for example with native checkboxes it won't work as there we have to access the `event.target.checked` property instead.

```js
{
  component: 'input',
  model: 'isChecked',
  fieldOptions: {
    attrs: {
      type: 'checkbox'
    },
    on: ['change']
  },
  eventProp: 'checked', // set the event.target property to emit as value
  valueProp: 'checked', // We also want to set the model as the component's 'checked' attribute
}
```

<Examples-BasicValueProp />

<a href="">Edit on CodeSandbox</a>
