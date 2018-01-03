# component

The `component` property can refer to any [Vue component](https://vuejs.org/v2/guide/components.html) or [HTML element tag name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

```js
// Option 1 - HTML element tag
data() {
  return {
    uiSchema: [{
      component: 'div'
    }]
  }
}
```

```js
// Option 2 - Globally registered component
data() {
  return {
    uiSchema: [{
      component: 'my-custom-component'
    }]
  }
}
```

```js
// Option 3 - component object
import MyCustomComponent from './my-custom-component'

...

data() {
  return {
    uiSchema: [{
      component: MyCustomComponent
    }]
  }
}
```

```html
<script>
// Option 4
import MyCustomComponent from './my-custom-component'

...

data() {
  return {
    customComponents: {
      MyCustomComponent,
      // other components
    },
    uiSchema: [{
      // or the component's name property, e.g. my-custom-component
      component: 'MyCustomComponent'
    }]
  }
}

...

</script>

<template>
  <vue-form-json-schema
    :components="customComponents"
    :model="model"
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>
```
