# Vue Form JSON Schema

> A [JSON schema](https://json-schema.org) based form generator, bring your components!

##### Use any Vue component or HTML element!

There are *no prebuilt components* for you to puzzle your form together with. Instead you can use any component or element which emits an event, custom or native.

> Note that essentially all Vue components that uses `v-model` emits an `input` (or similar) event. [See Vue's guide for more info](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events)

## Installation

### Upgrading from v1? Check out the [v2 release notes](https://github.com/jarvelov/vue-form-json-schema/releases/tag/v2.0.0) to see if and how migration affects you.

Install from npm

`npm install vue-form-json-schema`

Import to your app

```js
import Vue from 'vue';
import VueFormJsonSchema from 'vue-form-json-schema';

Vue.component('vue-form-json-schema', VueFormJsonSchema);
```

> Note if you're not using Webpack / Rollup and want to use the ESM version you need to import VueFormJsonSchema like this:

```js
import VueFormJsonSchema from 'vue-form-json-schema/dist/vue-form-json-schema.esm.js';
```

Check out the demos or see a minimal example in the [usage instructions](#usage) to get started.

### UMD

> If you're using the UMD version you can find more examples in the `examples` folder of the [github repo](https://github.com/jarvelov/vue-form-json-schema/tree/master/examples) and the [UMD demo below](#umd-demos).

If you want to use `vue-form-json-schema` directly in a browser you can do so by using the UMD version. The UMD version autoinstalls the `vue-form-json-schema` component if Vue is found on the window. The entire module is also available on `window.VueFormJsonSchema` where the named exports such as for example `vfjsFieldMixin` can be accessed.

#### Hosted by unkpg

`<script src="https://unpkg.com/vue-form-json-schema@latest/dist/vue-form-json-schema.umd.js"></script>`

You can substite `vue-form-json-schema@latest` to a fixed version, such as `vue-form-json-schema@2.3.0`

#### Installed from npm

`<script src="../node_modules/dist/vue-form-json-schema.umd.js"></script>`

## Demo

> Note that all demos use Bootstrap styling, but no styling is included in this package and it is up to you what styles should be used.

### [Minimal demo](https://py6611pr9m.codesandbox.io)

The least amount of configuration to render an `input` element.

### [Nested UI demo](https://882w4v374l.codesandbox.io)

Using Bootstrap classes to show how layout can be different for devices with different screen sizes.
In this example two input fields will be wrapped inside a div with `col-12 col-sm-6` classes.
Try resizing your browser window too see it in action.

### [Conditional visibility and Animation demo](https://k0q8wk946o.codesandbox.io/)

Sometimes a field should only be shown if a condition is met. Uses `<transition>` to provide animation.

### [Vue components demo](https://z549j1vxx.codesandbox.io)

See how to use your own or third party Vue components in `vue-form-json-schema`.

### [Vue async loading of form](https://2p51q8q14y.codesandbox.io)

Loading the form from a backend? Check out this example.

### [Registration form with validation](https://4rykx7jj19.codesandbox.io)

A more complete example with validation and error messages

### [Registration form example with nested properties](https://nxn8y.codesandbox.io/)

The registration form above where the form model keys are nested under another key

### UMD demos

All the examples above are replicated using the UMD version in the `examples` folder of this repo.

[Online version of the first demo](https://jsfiddle.net/jarvelov/ewg6dfqL/)

## Features

* Supports any HTML element or Vue component
* Small (`32K` uncompressed, `6.5K` gzipped)
* Standardized [JSON schema](json-schema.org) for annotation and validation (by [Ajv](https://github.com/epoberezkin/ajv))
* Layout is independent from data structure

## Documentation

[Gitbook](https://jarvelov.gitbook.io/vue-form-json-schema/)

## Usage

### Basic example with one field

>For using the UMD version, check out the `examples` folder where all the demos above are replicated using the UMD version

[See demo](https://codesandbox.io/s/py6611pr9m)

```js
<template>
    <vue-form-json-schema
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
    >
  </vue-form-json-schema>
</template>

<script>
  export default {
    data() {
      return {
        // An object which holds the form values
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
    }
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
* ~~Add i18n support~~
  * Added in 1.15.2 with `options.ajv.locale` setting
* ~~Write this README~~
* Use Ajv internally to validate:
  * `vfs-global` prop `ui-schema`
  * `vfs-component` prop `ui-schema`
* ~~Write docs~~
* ~~Publish with Gitbook~~
