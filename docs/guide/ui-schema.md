# uiSchema

The `uiSchema` is the schema for what components will be rendered and how they are configured. An item in the `uiSchema` array is called a `field`.

A `field` can have the following properties:

- [component](#component) <span style="color:red">\*</span> - The component/HTML tag to render
- [children](#children) - Fields to render inside this field
- [dynamicOptions](#dynamicoptions) - Dynamically add/remove options based on a JSON schema
- [eventHandler](#eventhandler)
- [errorHandler](#errorhandler)
- [errorOptions](#erroroptions)
- [fieldOptions](#fieldoptions)
- [valueProp](#valueprop)

<span style="color:red">\*</span> required

Here is a basic example of how to transform the following Vue template into `fields` which can be used in a `uiSchema`.

```html
<div class="form-group">
  <input v-model="model.firstName" />
</div>
```

The above would be translated into the following schema:

```js
{
  component: 'div',
  fieldOptions: {
    class: ['form-group']
  },
  children: [
    {
      component: 'input',
      model: 'firstName',
      fieldOptions: {
        on: ['input']
      }
    }
  ]
}
```

Check out the [examples](./examples.md) for more complex demos and see how to integrate popular 3rd party UI libraries such as Bootstrap, Material UI, Element UI and more.

## component

The `component` property can refer to any [Vue component](https://vuejs.org/v2/guide/components.html) or [HTML element tag name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

```js
// Option 1 - HTML element tag
data() {
  return {
    uiSchema: [{
      component: 'div'
    }]
  }
}
```

```js
// Option 2 - Globally registered component
data() {
  return {
    uiSchema: [{
      component: 'my-custom-component'
    }]
  }
}
```

```js
// Option 3 - component object
import MyCustomComponent from './my-custom-component'

...

data() {
  return {
    uiSchema: [{
      component: MyCustomComponent
    }]
  }
}
```

```js
// Option 4 - Component from components prop
import MyCustomComponent from './my-custom-component'

...

data() {
  return {
    components: {
      'my-custom-component': MyCustomComponent
    },
    uiSchema: [{
      component: 'my-custom-component'
    }],
    ...
  }
}
....

<template>
  <vue-form-json-schema
    ...
    :components="components"
    :ui-schema="uiSchema"
  />
</template>
```

## children

An array of fields. The rendered children (vnodes) will be passed in the default slot to the `component`, unless a [slot](#slot) is set.

```js
uiSchema: [
  {
    component: 'div',
    children: [
      {
        component: 'div',
        fieldOptions: {
          domProps: {
            innerHTML: 'The first second div',
          },
        },
      },
      {
        component: 'div',
        fieldOptions: {
          domProps: {
            innerHTML: 'The first second div',
          },
        },
      },
    ],
  },
];
```

## displayOptions

> Tip! This option plays nicely with `transition` and `transition-group`! See example at the bottom.

Sometimes a field is only relevant if some condition is met. The `displayOptions` property uses JSON Schema to evaluate if a field should be visible or not. If there are no errors then the field is shown.

There are 2 options: Full and Single.

### Full form model

The full model uses the entire form model as data.

```js
uiSchema: [
  {
    component: 'div',
    children: [
      {
        component: 'div',
        displayOptions: {
          schema: {
            type: object,
            properties: {
              firstName: {
                type: 'string',
                minLength: 3,
              },
            },
            required: ['firstName'],
          },
        },
      },
    ],
  },
];
```

### Single field model

The Full option can be a bit verbose when you only rely on a single field's model. By setting the `model` property on the `displayOptions` object we can apply the `schema` to the value of that field's model.

```js
uiSchema: [
  {
    component: 'div',
    children: [
      {
        component: 'div',
        displayOptions: {
          // Here we set to use the firstName model as the value to evaluate the schema against
          model: 'firstName',
          schema: {
            type: 'string',
            minLength: 3,
          },
        },
      },
    ],
  },
];
```

### Usage with transitions

To get some nice transitions all that is needed is to nest the component in a `transition` or `transition-group` field.
Check out the [Vue.js guide on transitions](https://vuejs.org/v2/guide/transitions.html) for more info.

```js
uiSchema: [{
  component: 'transition',
  fieldOptions: {
    // Set the name prop to `fade`
    props: {
      name: 'fade',
      // Any transition props such as `enter-class` can be set here
      // enterClass: ''
    },
    on: {
      // Even javascript hooks are available
      enter: (el) => {
        console.log('hello!')
      },
      leave: (el) => {
        console.log('goodbye!');
      }
    }
  },
  children: [{
    component: 'div',
    displayOptions: {
      model: 'firstName'
      schema: {
        type: 'string',
        minLength: 3
      }
    }
  }]
}]
```

## dynamicOptions

Sometimes a field needs to have properties added/removed when a field has a certain value. This is where `dynamicOptions` comes into play.
`dynamicOptions` can alter any of a [field's top level properties](#field), like `children`, `component`, `fieldOptions` etc. when the given `schema` is `true` or `false`. The behavior is the same as [displayOptions](#displayOptions), however in contrast to `displayOptions` you can pass in an array of options by using an array.

There are 2 options: Full and Single.

### Full form model

The full model uses the entire form model as data.

```js
uiSchema: [
  {
    component: 'div',
    dynamicOptions: [
      {
        schema: {
          type: object,
          required: ['firstName'],
          properties: {
            firstName: {
              type: 'string',
              minLength: 3,
            },
          },
        },
        options: {
          // any of a field's top level properties are valid here
          fieldOptions: {
            // This class is added when the schema is evaluated to true
            class: ['text-success'],
          },
        },
      },
    ],
  },
];
```

### Single field model

The Full option can be a bit verbose when you only rely on a single field's model. By setting the `model` property on the `displayOptions` object we can apply the `schema` to the value of that field's model.

```js
uiSchema: [
  {
    component: 'div',
    dynamicOptions: [
      {
        // Here we set to use the firstName model as the value to evaluate the schema against
        model: 'firstName',
        schema: {
          type: 'string',
          minLength: 3,
        },
        options: {
          // any of a field's top level properties are valid here
          fieldOptions: {
            // These properties are when the schema is evaluated to true
            class: ['text-success'],
            domProps: {
              innerHTML:
                'Looking good, person with a first name with more than 3 characters!',
            },
          },
        },
      },
      {
        model: 'firstName',
        schema: {
          type: 'string',
          maxLength: 2,
        },
        options: {
          // any of a field's top level properties are valid here
          fieldOptions: {
            // These properties are when the schema is evaluated to true
            class: ['text-warning'],
            domProps: {
              innerHTML:
                'Hey, that is cool! Your first name is less than or equal to 2 characters!',
            },
          },
        },
      },
    ],
  },
];
```

## eventProp

Sets which property should be emitted as the field's value when the component emits an event which is based on the [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface. The property specified by `eventProp` is read from the event's `target` property, i.e. `event.target[eventProp]`. Default value is `value`, i.e. `event.target['value']`.

```js
uiSchema: [
  {
    component: 'input',
    model: 'isChecked',
    eventProp: 'checked',
    valueProp: 'checked',
    fieldOptions: {
      type: 'checkbox',
      on: ['input'],
    },
  },
];
```

## errorOptions

Same API as [fieldOptions](field-options.md) but is only applied when the field has errors and has been modified.

```js
uiSchema: [
  {
    component: 'input',
    model: 'input',
    errorOptions: {
      class: ['is-invalid'],
    },
    fieldOptions: {
      class: ['form-control'],
      on: ['input'],
    },
  },
];
```

## errorHandler

`errorHandler` is a Boolean, which is set to true for fields which should handle the error messages for a model.
The component will get the the same props as any other component but it cannot receive any [children](children.md) as the default slot is populated by the rendered `errors`.

The errors are passed as the default slot are rendered individually as a `<div>`.
If you want to render them differently you can handle the errors in the `vfjsFieldErrors` prop yourself. This is an array of the [Ajv validation errors](https://github.com/epoberezkin/ajv#validation-errors)

```js
data() {
  return {
    schema: {
      type: 'object',
      required: ['input'],
      properties: {
        input: {
          type: 'string',
          minLength: 1 // The value's length has to be at least 1 character
        }
      }
    },
    uiSchema: [{
      component: 'input',
      model: 'input',
      fieldOptions: {
        // Optionally set the attributes on the dom element as well
        // This can be used to let the browser validate the form
        //
        // If you don't want the browser to validate the form
        // use the `novalidate` attribute on <vue-form-json-schema/>
        attrs: {
          // Set required attribute on the dom element
          required: true
          // Set minlength attribute
          minlength: 1
        },
        on: ['change']
      }
    }, {
      // This component takes care of the errors from 'input'
      // If the form is submitted with the input being empty the error handler
      // will render the errors inside it
      component: 'div',
      model: 'input',
      errorHandler: true,
      fieldOptions: {
        class: ['bg-danger']
      }
    }]
  }
}
```

## fieldOptions

Under the hood `vue-form-json-schema` is using Vue's [render functions](https://vuejs.org/v2/guide/render-function.html) to create the form elements. This means basically any property that is supported in a render function can be used in the `fieldOptions` object.
See Vue's guide on render function's [Data Object In-Depth](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for more details on all available properties

The following properties are tested and supported with `vue-form-json-schema`

- [attrs](#attrs)
- [class](#class)
- [domProps](#domprops)
- [key](#key)
- [nativeOn](#nativeon)
- [on](#on)
- [props](#props)
- [slot](#slot)
- [style](#style)

### attrs

Essentially any normal html attributes

```js
// Normal HTML attributes
uiSchema: [
  {
    component: 'input',
    fieldOptions: {
      attrs: {
        id: 'foo',
        placeholder: 'bar',
      },
    },
  },
];
```

### class

The `class` property can be configured in 3 ways. Either as an `Object`, `Array` or simply a `String`. This is basically the same syntax as [`v-bind:class`](https://vuejs.org/v2/guide/class-and-style.html) uses.

#### Object

An `Object` must have the classes as keys and the keys' value should be a `Boolean`.

```js
uiSchema: [
  {
    component: 'div',
    fieldOptions: {
      class: {
        'col-12': true, // class is included
        'col-md-6': true, // class is included
        'col-lg-4': false, // class is NOT included
      },
    },
  },
];
```

#### Array

An `Array` should be a an array of strings, multidimensional arrays or arrays with any other values other than strings are not supported.

```js
uiSchema: [
  {
    component: 'div',
    fieldOptions: {
      // All values in array are included
      class: ['col-12', 'col-md-6'],
    },
  },
];
```

#### String

```js
// Option 3: String
uiSchema: [
  {
    component: 'div',
    fieldOptions: {
      class: 'col-12 col-md-6',
    },
  },
];
```

### domProps

`vue-form-json-schema` follows [Vue's render functions syntax](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth). This property seems to really only exist in order to set `innerHTML`.
Be careful about setting `innerHTML` as that effectively disables a field's ability to render children

```js
// DOM properties
uiSchema: [
  {
    component: 'div',
    fieldOptions: {
      domProps: {
        innerHTML: '<div style="background-color: red">Hello</div>',
      },
    },
  },
];
```

### key

This property is set to each field's unique internal id by default. You can optionally override it should you wish to specifiy it.

> The key special attribute is primarily used as a hint for Vue’s virtual DOM algorithm to identify VNodes when diffing the new list of nodes against the old list. - [Vue.js guide](https://vuejs.org/v2/api/#key)

### nativeOn

Register events listeners for native [Events](https://developer.mozilla.org/en-US/docs/Web/Events).
Accepts a `String`, `Array` or an `Object`.

#### String

```js
uiSchema: [
  {
    component: 'input',
    fieldOptions: {
      nativeOn: 'input',
    },
  },
];
```

#### Array

```js
uiSchema: [
  {
    component: 'input',
    fieldOptions: {
      nativeOn: ['input'],
    },
  },
];
```

#### Object

An `Object` can be used if the value should be manipulated or used elsewhere before set in to the model.

> Note that the callback must be synchronous

```js
uiSchema: [{
  component: 'input',
  fieldOptions: {
    nativeOn: {
      'input': event => String(event.target.value).toLowerCase();
    }
  }
}]
```

### on

Register events listeners for [Custom Events](https://vuejs.org/v2/guide/components.html#Custom-Events) emitted using [`$emit`](https://vuejs.org/v2/api/#vm-emit).
Accepts a `String`, `Array` or an `Object`.

#### String

```js
uiSchema: [
  {
    component: 'input',
    fieldOptions: {
      on: 'input',
    },
  },
];
```

#### Array

```js
uiSchema: [
  {
    component: 'input',
    fieldOptions: {
      on: ['input'],
    },
  },
];
```

#### Object

An `Object` can be used if the value should be manipulated or used elsewhere before set in the model.

> Note that the callback must be synchronous

```js
uiSchema: [{
  component: 'input',
  fieldOptions: {
    on: {
      input: event => String(event.target.value).toLowerCase();
    }
  }
}]
```

### props

Plain [Vue props](https://vuejs.org/v2/guide/components.html#Props)

```js
uiSchema: [
  {
    component: 'my-custom-component',
    fieldOptions: {
      props: {
        message: 'Hello!',
      },
    },
  },
];
```

### slot

> Used on content inserted into child components to indicate which named slot the content belongs to. - [Vue.js guide](https://vuejs.org/v2/api/#slot)

`MyCustomComponent.vue`

```html
<template>
  <slot name="main">
    <span>This is the default main slot text</span>
  </slot>
</template>
```

`MyForm.vue`

```html
...

<script>
  export default {
    data() {
      return {
        uiSchema: [{
          component: 'my-custom-component' // globally registered component
          children: [{
            component: 'div',
            fieldOptions: {
              domProps: {
                innerHTML: 'This child component will occupy the main slot of the parent'
              }
              slot: 'main'
            }
          }]
        }]
      }
    }
  }
</script>
```

### style

The style property is simply an object where the key is the style property and the value is the property value. See Vue's guide on [`v-bind:style`](https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles) for more information.

> Note that the [Array syntax](https://vuejs.org/v2/guide/class-and-style.html#Array-Syntax-1) is NOT tested yet as of 2017-12-17

```js
uiSchema: [
  {
    component: 'div',
    fieldOptions: {
      domProps: {
        innerHTML: 'This is some red text',
      },
      style: {
        color: 'red',
        fontSize: '13px',
      },
    },
  },
];
```

### ref

Not supported yet

## valueProp

Sets the property to which the field's `model` value is passed. Default is `value`.

```js
uiSchema: [
  {
    component: 'list',
    model: 'input',
    valueProp: 'items',
    fieldOptions: {
      on: ['change'],
    },
  },
];
```
