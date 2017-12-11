# Vue Form JSON Schema

### Dependencies

#### Ajv
For form and internal validation

#### Lodash
`get`, `set` and `merge` are used, since reinventing the wheel isn't my thing. Bundle size is very important though and considered though so

## Usage

There are two ways this package is distributed. Use whatever suits your requirements.

### UMD (`pkg.main`)

This is the way to go if you want to use the package with AMD/RequireJS or directly in the browser.

### Module (`pkg.module`)

> If you use `webpack` or `rollup` this version will be used automatically.

#### Option 1

Import everything and use globally

```js
// Register and use globally
import VueFormJsonSchema from 'vue-form-json-schema';
import VueFormJsonSchemaCoreComponents from 'vue-form-json-schema-core-components';

Vue.component('vue-form-json-schema', VueFormJsonSchema);
Vue.use(VueFormJsonSchemaCoreComponents);
```

```html
<template>
    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      :on-change="onChange"
    >
  </vue-form-json-schema>
</template>
```

#### Option 2

Import and use locally

```html
<script>
// Import vue-form-json-schema
import VueFormJsonSchema from 'vue-form-json-schema';

// Import all core components
import { VueFormJsonSchemaCoreComponents } from 'vue-form-json-schema-core-components';

// Or: Import only some core components
// import { vfjsSelect, vfjsTextarea } from 'vue-form-json-schema-core-components';
// const components = { vfjsSelect, vfjsTextarea };

// Include custom components
import MyCustomComponent from './my-custom-component';
const components = Object.assign({}, VueFormJsonSchemaCoreComponents, {
  MyCustomComponent
});

</script>
<template>
    <vue-form-json-schema
      :components="components"
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      :on-change="onChange"
    >
  </vue-form-json-schema>
</template>
```

### Source

This package is built with ES2015 (ES6) and as such uses:

  * Promises
  * Arrow functions,
  * `const` & `let`
  * ...and other ES2015 goodies.

The [Stage 3 proposal rest/spread](https://github.com/tc39/proposal-object-rest-spread) syntax is also used and as such you will need to `babel`, before the code can be used in a browser environment.
For babel you need the following plugins:

`npm install --save-dev babel-plugin-transform-object-rest-spread`

And then add to `.babelrc`

```json
"plugins": [
  "transform-object-rest-spread"
]
```

Now you can simply import the source directly into your project!

```js
import VueFormJsonSchema from 'vue-form-json-schema/src'
```

### TODO

* Write this README
* Write tests
* Use Ajv internally to validate:
  * `vfs-global` prop `ui-schema`
  * `vfs-field` prop `ui-schema`
* Write docs
  * Write page for
    * `vfs-viewer` component
    * `vfs-global` mixin
    * `vfs-field` mixin
    * [vfs core-fields](https://github.com/jarvelov/vue-form-json-schema-core-fields)
  * Publish with Gitbook
