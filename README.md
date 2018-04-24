# Vue Form JSON Schema

> A [JSON schema](json-schema.org) based form generator without any fields!

##### Use any Vue component or HTML element!

There are *no prebuilt components* for you to puzzle your form together with. Instead you can use any component or element which emits an event, custom or native.

> Note that essentially all Vue components that uses `v-model` emits an `input` (or similar) event. [See Vue's guide for more info](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events)

## Installation

> For browser/UMD instructions check the [Documentation](#documentation)

Install from npm

`npm install vue-form-json-schema`

Import to your app

```js
import Vue from 'vue';
import VueFormJsonSchema from 'vue-form-json-schema';

Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

Check out the demos or see a minimal example in the [usage instructions](#usage) to get started.

## Demo

> Note that all demos use Bootstrap styling, but no styling is included in this package and it is up to you what styles should be used.

### [Minimal demo](https://www.webpackbin.com/bins/-L0_48pIxbUFNG8f87pI)

The least amount of configuration to render an `input` element.

### [Nested UI demo](https://www.webpackbin.com/bins/-L0_5kwqJixNYqtpiYxd)

Using Bootstrap classes to show how layout can be different for devices with different screen sizes.
In this example two input fields will be wrapped inside a div with `col-12 col-sm-6` classes.
Try resizing your browser window too see it in action.

### [Conditional visibility and Animation demo](https://www.webpackbin.com/bins/-L0hgoQjI7Cq2EibysRr)

Sometimes a field should only be shown if a condition is met. Uses `<transition>` to provide animation.

See more demos in the [Documentation](#documentation)

## Features

* Supports any HTML element or Vue component
* Small (`36K` uncompressed, `8.5K` gzipped)
* Standardized [JSON schema](json-schema.org) for annotation and validation (by [Ajv](https://github.com/epoberezkin/ajv))
* Layout is independent from data structure

## Documentation

[Gitbook](https://jarvelov.gitbooks.io/vue-form-json-schema)

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
          // Same API as [Vue's render functions](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth)
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
  };
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
