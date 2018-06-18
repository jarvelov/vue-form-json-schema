# class

The `class` property can be configured in 3 ways. Either as an `Object`, `Array` or simply a `String`. This is essentially the same API as [`v-bind:class`](https://vuejs.org/v2/guide/class-and-style.html) uses.

## Object

An `Object` must have the classes as keys and the keys' value should be a `Boolean`.

```js
// Option 1: Object
data() {
  uiSchema: {
    component: 'div',
    fieldOptions: {
      class: {
        'col-12': true, // Class is included
        'col-md-6': true, // Class is included
        'col-lg-4': false // Class is NOT included
      }
    }
  }
}
```

## Array

An `Array` should be a an array of strings, multidimensional arrays or arrays with any other values other than strings are not supported.

```js
// Option 2: Arrays
data() {
  uiSchema: {
    component: 'div',
    fieldOptions: {
      // All values in array is included
      class: [
        'col-12',
        'col-md-6'
      ]
    }
  }
}
```

## String

```js
// Option 3: String
data() {
  uiSchema: {
    component: 'div',
    fieldOptions: {
      class: 'col-12 col-md-6'
    }
  }
}
```
