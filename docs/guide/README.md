# Getting started

## Option 1

Import everything and use globally

```js
// App.js
import VueFormJsonSchema from 'vue-form-json-schema';
Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

```html
<script>
// MyCustomComponent.js
export default {
  data() {
    return {
      model: {},
      schema: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          }
        }
      },
      uiSchema: [{
        component: 'input',
        model: 'firstName',
        fieldOptions: {
          class: ['form-control'],
          on: ['input'],
          attrs: {
            placeholder: 'Please enter your first name'
          }
        }
      }]
    }
  },
}
</script>

<template>
    <vue-form-json-schema
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
    >
  </vue-form-json-schema>
</template>
```

## Option 2

Import and use locally

```html
<script>
// MyCustomComponent.js
import VueFormJsonSchema from 'vue-form-json-schema';

export default {
  data() {
    return {
      model: {},
      schema: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          }
        }
      },
      uiSchema: [{
        component: 'input',
        model: 'firstName',
        fieldOptions: {
          class: ['form-control'],
          on: ['input'],
          attrs: {
            placeholder: 'Please enter your first name'
          }
        }
      }]
    }
  },
}

</script>
<template>
    <vue-form-json-schema
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
    >
  </vue-form-json-schema>
</template>
```
