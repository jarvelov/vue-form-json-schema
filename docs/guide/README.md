# Quick start

`vue-form-json-schema` is distributed as both an ESM and UMD version.

If you use a bundler such as `webpack` you want the ESM version. If you want to use it in the browser, use CommonJS/AMD or if you are stuck on an older version of Webpack you should use the [UMD version](#umdversion).

If you use a bundler the ESM version will be used automatically.

## 1. Installation

Install using npm

`npm install vue-form-json-schema`

or, install using yarn

`yarn add vue-form-json-schema`

## 2. Setup

You can choose to either register the component globally or locally.

### 2.1 Global registration

Import the component and register it.

```js
import VueFormJsonSchema from 'vue-form-json-schema';

Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

### 2.2 Local registration

```html
<script>
  import VueFormJsonSchema from 'vue-form-json-schema';

  export default {
    components: {
      'vue-form-json-schema': VueFormJsonSchema,
    },
  };
</script>
```

## 3. Usage

That's it! You're ready to start using `vue-form-json-schema`! Here is a basic example with a single input field to get you going.

```html
<script>
  export default {
    data() {
      return {
        model: {},
        schema: {
          type: 'object',
          required: ['firstName'],
          properties: {
            firstName: {
              type: 'string',
            },
          },
        },
        uiSchema: [
          {
            component: 'input',
            model: 'firstName',
            fieldOptions: {
              class: ['form-control'],
              on: ['input'],
              attrs: {
                placeholder: 'Please enter your first name',
              },
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
  />
</template>
```

## UMD version

If you want to use `vue-form-json-schema` directly in a browser you can do so by using the UMD version. The UMD version autoinstalls the `vue-form-json-schema` component if Vue is found on the window. The entire module is also available on `window.VueFormJsonSchema` where the named exports such as for example `vfjsFieldMixin `can be accessed.

### UNPKG CDN

`<script src="https://unpkg.com/vue-form-json-schema@latest/dist/vue-form-json-schema.umd.js"></script>`

You can substite `vue-form-json-schema@latest` to a fixed version, such as `vue-form-json-schema@{{$themeConfig.version}}`

### Installed from npm

`<script src="../node_modules/dist/vue-form-json-schema.umd.js"></script>`
