# Field options

## Available attributes

> See Vue's guide on render function's [Data Object In-Depth]( https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for more details on all available properties

Since we're using Vue's [render functions](https://vuejs.org/v2/guide/render-function.html) to create the form elements basically any property that is supported in a render function can be used in the `fieldOptions` object.

The following attributes are tested and supported with `vue-form-json-schema`

* [attrs](field-options/attrs.md)
* [class](field-options/class.md)
* [domProps](field-options/dom-props.md)
* [key](field-options/key.md)
* [nativeOn](field-options/native-on.md)
* [on](field-options/on.md)
* [props](field-options/props.md)
* [slot](field-options/slot.md)
* [style](field-options/style.md)
* ref

## Example

```js
data() {
  return {
    uiSchema: [{
      component: 'input',
      fieldOptions: {
        class: ['form-control'],
        on: ['input']
      }
    }]
  }
}
```
