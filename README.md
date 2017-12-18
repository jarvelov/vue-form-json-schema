# Vue Form JSON Schema

A [JSON schema](json-schema.org) based form generator without any fields!

`vue-form-json-schema` tries to not make any assumptions about how your form is structured and doesn't give you any prebuilt components for you to puzzle your form together with. Instead you can use any Vue component or HTML element in your form.

## Installation

> For browser/UMD instructions check the [Documentation](#documentation)

`npm install vue-form-json-schema`

```js
import Vue from 'vue';
import VueFormJsonSchema from 'vue-form-json-schema';

Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

[Usage instructions](#usage)

## Documentation

[Gitbook](https://jarvelov.gitbooks.io/vue-form-json-schema)

## Demo

* [Minimal demo](https://www.webpackbin.com/bins/-L0_48pIxbUFNG8f87pI)
* [Nested elements demo](https://www.webpackbin.com/bins/-L0_5kwqJixNYqtpiYxd])

See more demos in the [Documentation](#documentation)

## Usage

### Basic example with one field

[See demo](https://www.webpackbin.com/bins/-L0_48pIxbUFNG8f87pI)

```js
<template>
    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      :on-change="onChange"
    >
  </vue-form-json-schema>
</template>

<script>
  export default {
    data() {
      return {
        model: {},
        // A valid JSON Schema object
        schema: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string',
            },
          },
        },
        // Array of HTML elements or Vue components
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
    },
    ...
  }
</script>
```

### Dependencies

#### Ajv
For form validation using [JSON Schema](http://json-schema.org/) and internal validation

#### Lodash
`get`, `set` and `merge` are used throughout the package.
Bundle size is very important though and is always considered and so we heavily strip down lodash to only include the absolute necessities

#### Vue

Tested with v2.5.9 but will probably work on any version >= v2.4.0

### TODO

* Write tests
* Add i18n support
* ~~Write this README~~
* Use Ajv internally to validate:
  * `vfs-global` prop `ui-schema`
  * `vfs-component` prop `ui-schema`
* ~~Write docs~~
* ~~Publish with Gitbook~~
