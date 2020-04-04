# components

With Vue one can use both locally and globally registered components. If not all the components you want to use are globally registered you can use the `components` property to pass in additional components to `vue-form-json-schema`.

## Provide locally registered components

In this example we re-use the locally registered components and pass them along to `vue-form-json-schema`

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :schema="schema"
    :ui-schema="uiSchema"
    :components="$options.components"
  />
</template>

<script>
  import MyComponent from "./MyComponent"

  export default {
    components: {
      "my-component": MyComponent
    },
    data() {
      return {
        model: {
          firstName: "John",
        },
        schema: {
          type: 'object',
          properties: {
            firstName: 'string'
          }
        },
        uiSchema: [{
          component: "my-component",
          model: 'firstName',
          fieldOptions: {
            on: ['input']
          }
        }]
      }
    }
  }
</script>
```

## Use components directly without registering them

In this example we pass the components along to `vue-form-json-schema` without registering them first

```html
<template>
  <vue-form-json-schema
    v-model="model"
    :schema="schema"
    :ui-schema="uiSchema"
    :components="components"
  />
</template>

<script>
  import MyComponent from "./MyComponent"

  export default {
    data() {
      return {
        model: {
          firstName: "John",
        },
        schema: {
          type: 'object',
          properties: {
            firstName: 'string'
          }
        },
        components: {
          "my-component": MyComponent
        },
        uiSchema: [{
          component: "my-component",
          model: 'firstName',
          fieldOptions: {
            on: ['input']
          }
        }]
      }
    }
  }
</script>
```
