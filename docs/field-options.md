# Field options

## Available attributes

> See Vue's guide on [The Data Object In-Depth]( https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for more details on available properties

Since we're using Vue's [render functions](https://vuejs.org/v2/guide/render-function.html) to create the form elements basically any property that is supported in a render function can be used in the `fieldOptions` object.

The following attributes are tested and supported with `vue-form-json-schema`

* [class](#class)
* [style](#style)
* [attrs](#attrs)
* [props](#props)
* [domProps](#domProps)
* slot
* key
* ref

### Class

The `class` property can be configured in 3 ways. Either as an `Object`, `Array` or simply a `String`. This is essentially the same API as [`v-bind:class`](https://vuejs.org/v2/guide/class-and-style.html) uses.

#### Object

An `Object` must have the classes as keys and the keys' value should be a `Boolean`.

```js
// Option 1: Object
fieldOptions: {
  class: {
    'col-12': true, // Class is included
    'col-md-6': true, // Class is included
    'col-lg-4': false // Class is NOT included
  }
}
```

#### Array

An `Array` should be a an array of strings, multidimensional arrays or arrays with any other values other than strings are not supported.

```js
// Option 2: Arrays
fieldOptions: {
  // All values in array is included
  class: [
    'col-12',
    'col-md-6'
  ]
}
```

#### String


```js
// Option 3: String
fieldOptions: {
  class: 'col-12 col-md-6'
}
```

### Style

The style property is simply an object where the key is the style property and the value is the property value. See Vue's guide on [`v-bind:style`](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles) for more information.

> Note that the [Array syntax](https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax-1) is NOT tested yet as of 2017-12-17

```js
fieldOptions: {
  style: {
    color: 'red',
    fontSize: '13px'
  }
}
```

### Attrs

```js
// Normal HTML attributes
fieldOptions: {
  attrs: {
    id: 'foo',
    placeholder: 'Hello!'
  }
}
```

### domProps

```js
// DOM properties
fieldOptions: {
  domProps: {
    innerHTML: '<div style="background-color: red">Hello</div>'
  }
}
```

### props

Plain `Vue` [props](https://vuejs.org/v2/guide/components.html#Props)

```js
// A custom component
Vue.component('my-custom-component', {
  name: 'my-custom-component',
  props: ['message'],
  template: '<span>{{ message }}</span>'
})

...

component: 'my-custom-component',
fieldOptions: {
  props: {
    message: 'Hello!'
  }
}
```
