# children

An array of [components](component.md). The rendered children (vnodes) will be passed in the default slot to the component.

```js
data() {
  return {
    uiSchema: [{
      component: 'div',
      children: [{
        component: 'div'
      }, {
        component: 'div'
      }]
    }]
  }
}
```
