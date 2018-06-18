# style

The style property is simply an object where the key is the style property and the value is the property value. See Vue's guide on [`v-bind:style`](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles) for more information.

> Note that the [Array syntax](https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax-1) is NOT tested yet as of 2017-12-17

```js
data() {
  return {
    uiSchema: {
      component: 'div',
      fieldOptions: {
        domProps: {
          innerHTML: 'This is some red text'
        },
        style: {
          color: 'red',
          fontSize: '13px'
        }
      }
    }
  }
}
```
