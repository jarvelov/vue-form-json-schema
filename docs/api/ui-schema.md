# uiSchema

An array of [components](ui-schema/component.md)

```js
  data() {
    return {
      uiSchema: [{
        component: 'div'
        fieldOptions: {
          domProps: {
            innerHTML: 'This is the first component!'
          }
        }
      }, {
        component: 'div',
        fieldOptions: {
          domProps: {
            innerHTML: 'This is the second component!'
          }
        }
      }]
    }
  }
```
