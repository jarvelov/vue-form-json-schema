# Pass model to specific prop

Most `Vue` components use the `value` prop when receiving a value from its parent. When `vue-form-json-schema` passes the [field](../guide/ui-schema.md)'s model to the component it will pass it to `value` prop by default. However, sometimes you might need to pass it to another prop and that's where the [valueProp](../guide/ui-schema.md#valueprop) property comes in.

In this example we have a `message` component which displays the value from its `message` prop.
We specify what prop we want to send the value in the `model` to with the [valueProp](../guide/ui-schema.md#valueprop).

```js
{
  component: 'message',
  model: 'firstName',
  valueProp: 'message', // Here we set the prop to pass the above model to
}
```

<Examples-BasicValueProp />
