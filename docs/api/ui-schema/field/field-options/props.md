# props

Plain `Vue` [props](https://vuejs.org/v2/guide/components.html#Props)

```js
// A custom component
Vue.component('my-custom-component', {
  name: 'my-custom-component',
  props: ['message'],
  template: '<span>{{ message }}</span>'
})

...
data() {
  return {
    uiSchema: {
      component: 'my-custom-component',
      fieldOptions: {
        props: {
          message: 'Hello!'
        }
      }
    }
  }
}
```
