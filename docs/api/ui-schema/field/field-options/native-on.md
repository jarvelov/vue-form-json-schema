# nativeOn

Register events listeners for native [Events](https://developer.mozilla.org/en-US/docs/Web/Events).
Accepts either an `Array` or an `Object`.

## Array

```js
// Option 1: Arrays
data () {
  return {
    uiSchema: {
      component: 'input',
      fieldOptions: {
        nativeOn: [
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
        nativeOn: {
          'input': event => String(event.target.value).toLowerCase();
        }
      }
    }
  }
}
```
