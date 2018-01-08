# slot

> Used on content inserted into child components to indicate which named slot the content belongs to. - [Vue.js guide](https://vuejs.org/v2/api/#slot)

```js
// MyCustomComponent.vue
<template>
  <slot name="header">
    <span>This is the default header text</span>
  </slot>
  <slot name="footer">
  <span>This is the default footer text</span>
  </slot>
</template>

// MyForm.vue
...

export default {
  data () {
    return {
      uiSchema: {
        component: 'my-custom-component' // globally registered component
        children: [{
          component: 'div',
          fieldOptions: {
            domProps: {
              innerHTML: 'This child component will occupy the header slot of the parent'
            }
            slot: 'header'
          }
        }]
      }
    }
  }
}
```
