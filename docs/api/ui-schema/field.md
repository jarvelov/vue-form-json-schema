A `field` is an `object` and must have a [component](ui-schema/component.md) property.

## Type

`Object`

## Properties

* [component](ui-schema/component.md) <span style="color: red">*</span>
* [children](ui-schema/children.md)
* [displayOptions](ui-schema/display-options.md)
* [errorHandler](ui-schema/error-handler.md)
* [errorOptions](ui-schema/error-options.md)
* [fieldOptions](ui-schema/field-options.md)

<span style="color: red">*</span> required

## Example

```js
  data() {
    return {
      uiSchema: [{
        // component is required
        component: 'div'
        // other optional properties
        fieldOptions: {
          domProps: {
            innerHTML: 'This is the first component!'
          }
        }
      }]
    }
  }
```
