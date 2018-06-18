# domProps

> Be careful about setting `innerHTML` as that effectively disables a field's ability to render children

```js
// DOM properties
data() {
  return {
    uiSchema: {
      component: 'div',
      fieldOptions: {
        domProps: {
          innerHTML: '<div style="background-color: red">Hello</div>'
        }
      }
    }
  }
}
```
