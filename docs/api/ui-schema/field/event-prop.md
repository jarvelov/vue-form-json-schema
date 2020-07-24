# Event prop

Sets which property should be emitted as the field's value when the component emits an event which is based on the [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface. The property specified by `eventProp` is read from the event's `target` property, i.e. `event.target[eventProp]`. Default value is `value`, i.e. `event.target['value']`.

## Set globally for all fields

```js
data() {
  return {
    options: {
      eventProp: 'target.href'
    }
  }
}
```

## Set locally for one field

```js
data() {
  return {
    uiSchema: [{
      component: 'input',
      model: 'isChecked',
      eventProp: 'checked',
      valueProp: 'checked',
      fieldOptions: {
        type: "checkbox",
        on: ['input']
      }
    }]

  }
}
```
