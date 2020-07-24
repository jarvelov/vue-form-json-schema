A `field` is an `object` and must have a [component](field/component.md) property.

## Type

`Object`

## Properties

* [component](field/component.md) <span style="color: red">\*</span>
* [children](field/children.md)
* [displayOptions](field/display-options.md)
* [dynamicOptions](field/dynamic-options.md)
* [errorHandler](field/error-handler.md)
* [errorOptions](field/error-options.md)
* [eventProp](field/event-prop.md)
* [fieldOptions](field/field-options.md)
* [valueProp](field/value-prop.md)

<span style="color: red">\*</span> required

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
