# children

An array of `fields`. The rendered children (vnodes) will be passed in the default slot to the `component`.

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
