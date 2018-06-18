# slot

> Used on content inserted into child components to indicate which named slot the content belongs to. - [Vue.js guide](https://vuejs.org/v2/api/#slot)

MyCustomComponent.vue

```html
<template>
  <slot name="main">
    <span>This is the default main slot text</span>
  </slot>
</template>
```

MyForm.vue
```html

...

<script>
export default {
  data() {
    return {
      uiSchema: {
        component: 'my-custom-component' // globally registered component
        children: [{
          component: 'div',
          fieldOptions: {
            domProps: {
              innerHTML: 'This child component will occupy the main slot of the parent'
            }
            slot: 'main'
          }
        }]
      }
    }
  }
}
</script>
```
