# on

Register events listeners for [Custom Events](https://vuejs.org/v2/guide/components.html#Custom-Events) emitted using [`$emit`](https://vuejs.org/v2/api/#vm-emit).
Accepts either an `Array` or an `Object`.

## Array

```js
// Option 1: Arrays
data () {
  return {
    uiSchema: {
      component: 'input',
      fieldOptions: {
        on: [
          'input'
        ]
      }
    }
  }
}
```

## Object

An `Object` can be used if the value should be manipulated or used elsewhere before set in to the model.

> Note that the callback must be synchronous

```js
// Option 2: Object
data () {
  return {
    uiSchema: {
      component: 'input',
      fieldOptions: {
        on: {
          'change': value => String(value).toLowerCase();
        }
      }
    }
  }
}
```
