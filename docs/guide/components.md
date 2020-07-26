# components

`vue-form-json-schema` supports both locally and globally registered components.

## Global components

For components which are already globally registered you do not need to do anything special. Just use the component's tag name as the `component` in the [uiSchema](./ui-schema.md). For example, if your component is globally registered like this:

```js
Vue.component('my-custom-component', MyCustomComponent);
```

You would then be able to use the component in the `uiSchema` like this:

```js
uiSchema: [
  {
    component: 'my-custom-component',
  },
];
```

## Local components

If you have components you want to use that are not globally registered you can use the `components` property to pass in additional components to `vue-form-json-schema`.

### Use locally registered components from parent component

In this example we re-use the locally registered components and pass them along to `vue-form-json-schema` by passing in `$options.components` to the `components` prop.

```html
<script>
  import MyComponent from './MyComponent';

  export default {
    components: {
      'my-component': MyComponent,
    },
    data() {
      return {
        model: {},
        schema: {
          type: 'object',
          properties: {
            firstName: 'string',
          },
        },
        uiSchema: [
          {
            component: 'my-component',
            model: 'firstName',
            fieldOptions: {
              on: ['input'],
            },
          },
        ],
      };
    },
  };
</script>

<template>
  <vue-form-json-schema
    v-model="model"
    :schema="schema"
    :ui-schema="uiSchema"
    :components="$options.components"
  />
</template>
```

### Use components directly without registering them

In this example we pass the components along to `vue-form-json-schema` without registering them first, neither as a global component nor as a local component in the parent component.

```html
<script>
  import MyComponent from './MyComponent';

  export default {
    data() {
      return {
        model: {},
        schema: {
          type: 'object',
          properties: {
            firstName: 'string',
          },
        },
        components: {
          'my-component': MyComponent,
        },
        uiSchema: [
          {
            component: 'my-component',
            model: 'firstName',
            fieldOptions: {
              on: ['input'],
            },
          },
        ],
      };
    },
  };
</script>

<template>
  <vue-form-json-schema
    v-model="model"
    :schema="schema"
    :ui-schema="uiSchema"
    :components="components"
  />
</template>
```
