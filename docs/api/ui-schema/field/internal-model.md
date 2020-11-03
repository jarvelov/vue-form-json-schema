# Internal model

Some component's require the model to be updated when the next [tick](https://vuejs.org/v2/api/#Vue-nextTick) happens. As there might be several `ticks` until `vue-form-json-schema` has updated the form model and re-renders the component.
An example of this is the `el-input` component from [element-ui](https://element.eleme.io), which loses its cursor position on the next re-render when the value hasn't updated yet.

VFJS can keep track of when the value changes and store it internally to ensure that on the next `tick` the

## Example 1

Setting `internalModel` to `true` will update the value for all events in `fieldOptions.on`

```js
data() {
  return {
    uiSchema: [{
      component: 'custom-input',
      model: 'input',
      internalModel: true,
      fieldOptions: {
        on: ['input']
      }
    }]
  }
}
```

## Example 2

`internalModel` can also be an array with keys for event names. The internal model will only be updated when these events are emitted.

```js
data() {
  return {
    uiSchema: [{
      component: 'custom-input',
      model: 'input',
      internalModel: ['input'],
      fieldOptions: {
        on: [
          'input',
          'custom-event'
        ]
      }
    }]
  }
}
```
