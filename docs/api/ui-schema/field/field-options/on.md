# on

Register events listeners for [Custom Events](https://vuejs.org/v2/guide/components.html#Custom-Events) emitted using [`$emit`](https://vuejs.org/v2/api/#vm-emit).
Accepts a `String`, `Array` or an `Object`.

## String

```js
// Option 1: String
data() {
  return {
    uiSchema: {
      component: 'input',
      fieldOptions: {
        on: 'input'
      }
    }
  }
}
```

## Array

```js
// Option 2: Arrays
data() {
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
// Option 3: Object
data() {
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
