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

```js
// Option 4 - Component from components prop
import MyCustomComponent from './my-custom-component'

...

data() {
  return {
    components: {
      MyCustomComponent
    },
    uiSchema: [{
      component: 'MyCustomComponent'
    }],
    model: { ... },
    schema: { ... }
  }
}

....

<template>
  <vue-form-json-schema
    v-model="model"
    :components="components"
    :ui-schema="uiSchema"
    :schema="schema"
  />
</template>
```
