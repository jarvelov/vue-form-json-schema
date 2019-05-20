# Getting started

> If you use `webpack` or `rollup` the `pkg.module` version will be used automatically.

#### Option 1

Import everything and use globally

```js
// App.js
import VueFormJsonSchema from 'vue-form-json-schema';
Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

```html
<script>
// Component.js
export default {
  data() {
    return {
      model: {},
      schema: {},
      uiSchema: []
    }
  },
  methods: {
    onChange(value) {
      this.model = value;
    }
  }
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

#### Option 2

Import and use locally

```html
<script>
// custom-component.js
import VueFormJsonSchema from 'vue-form-json-schema';

export default {
  name: 'custom-component',
  data() {
    return {
      model: {},
      schema: {},
      uiSchema: []
    }
  },
  components: {
    'vue-form-json-schema': VueFormJsonSchema
  },
  methods: {
    onChange(value) {
      this.model = value;
    }
  }
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
