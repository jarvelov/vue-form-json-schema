A `field` is an `object` and must have a [component](ui-schema/component.md) property.

## Type

`Object`

## Properties

* [component](ui-schema/component.md) <span style="color: red">*</span>
* [children](ui-schema/children.md)
* [displayOptions](ui-schema/displayOptions.md)
* [errorHandler]((ui-schema/errorHandler.md)
* [errorOptions]((ui-schema/errorOptions.md)
* [fieldOptions]((ui-schema/fieldOptions.md)

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
