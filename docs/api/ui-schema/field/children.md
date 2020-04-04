# children

An array of [fields](../field.md). The rendered children (vnodes) will be passed in the default slot to the `component`, unless a [slot](field-options/slot.md) is set.

```js
data() {
  return {
    uiSchema: [{
      component: 'div',
      children: [
        {
          component: 'div',
          fieldOptions: {
            domProps: {
              innerHTML: 'The first second div'
            }
          }
        },
        {
          component: 'div',
          fieldOptions: {
            domProps: {
              innerHTML: 'The first second div'
            }
          }
        }
      ]
    }]
  }
}
```
