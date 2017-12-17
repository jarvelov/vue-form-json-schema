# Vue Form JSON Schema


## Quick start

> For browser/UMD instructions check the Usage section below

Install it

`npm install vue-form-json-schema`

Import it

```js
import VueFormJsonSchema from 'vue-form-json-schema';
Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

## Documentation

[Gitbook](https://jarvelov.gitbooks.io/vue-form-json-schema)

## Demo

[Minimal demo](https://www.webpackbin.com/bins/-L0_48pIxbUFNG8f87pI)
[Nested elements demo](https://www.webpackbin.com/bins/-L0_5kwqJixNYqtpiYxd])

See more demos below

## Usage

### Basic example with one field

```js
<script>
  import VueFormJsonSchema from 'vue-form-json-schema';

  export default {
    components: {
      'vue-form-json-schema': VueFormJsonSchema
    },
    data() {
      return {
        model: {},
        state: {},
        valid: false,
        schema: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string',
            },
          },
        },
        uiSchema: [{
          component: 'input',
          model: 'firstName',
          fieldOptions: {
            class: ['form-control'],
            on: ['input'],
            attrs: {
              placeholder: 'Please enter your first name',
            },
          },
        }],
      };
    },
    methods: {
      onChange(value) {
        this.model = value;
      }
    }
    ...
  }
</script>

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

### Dependencies

#### Ajv
For form validation using [JSON Schema](http://json-schema.org/) and internal validation

#### Lodash
`get`, `set` and `merge` are used throughout the package.
Bundle size is very important though and is always considered and so we heavily strip down lodash to only include the absolute necessities

#### [js-sha256](https://github.com/emn178/js-sha256)

Used to generate unique hashes of a field so we can know when it needs to re-render

#### Vue

Tested with v2.5.9 but will probably work on any version >= v2.4.0

### TODO

* Write tests
* ~~Write this README~~
* Use Ajv internally to validate:
  * `vfs-global` prop `ui-schema`
  * `vfs-component` prop `ui-schema`
* ~~Write docs~~
* ~~Publish with Gitbook~~
