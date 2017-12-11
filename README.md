# Vue Form JSON Schema

### Dependencies

#### Ajv
For form and internal validation

#### Lodash
`get`, `set` and `merge` are used, since reinventing the wheel isn't my thing. Bundle size is very important though and considered though so

## Usage

There are three ways this package is distributed. Use whatever suits your requirements.

### Browser

If directly in a browser using a `<script>` tag

### UMD

This is the way to go if you want to use the package

### Module

Module is built with ES2015 (ES6) and as such uses `arrow functions`, `const`/`let` and other ES2015 goodies.
The [Stage 3 proposal rest/spread](https://github.com/tc39/proposal-object-rest-spread) syntax is also used and as such you will need to use a transpiler, such as `babel`, before it can be used in a browser environment.

For babel you need the following plugins:

`npm install --save-dev babel-plugin-transform-es2015-destructuring babel-plugin-transform-object-rest-spread`

And then add to `.babelrc`

```json
"plugins": [
  "transform-es2015-destructuring",
  "transform-object-rest-spread"
]
```

```js
import VueFormJsonSchema from 'vue-form-json-schema';
import * as components from 'vue-form-json-schema';
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
