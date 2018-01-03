# displayOptions

> Tip! This option plays nicely with `transition` and `transition-group`! See example at the bottom.

Sometimes a field is only relevant if some condition is met. The `displayOptions` property uses JSON Schema to evaluate if a field should be visible or not. If there are no errors then the field is shown.


There are 2 options: Full and Single.

## Full

The full model uses the entire form model as data.

```js
// Option 1 - full JSON schema
data() {
  return {
    uiSchema: [{
      component: 'div',
      children: [{
        component: 'div',
        displayOptions: {
          schema: {
            type: object,
            properties: {
              firstName: {
                type: 'string',
                minLength: 3
              }
            },
            required: ['firstName']
          }
        }
      }]
    }]
  }
}
```

The above is essentially doing the following validation with [Ajv](https://github.com/epoberezkin/ajv)

```js
const schema = {
  type: object,
  properties: {
    firstName: {
      type: 'string',
      minLength: 3
    }
  },
  required: ['firstName']
};

const data = {
  // Entire form model
  firstName,
  lastName,
  address,
  ...
}

// If there are no errors in ajv.errors then the field is shown
ajv.validate(schema, data);

```

## Single

The Full option can be a bit verbose when you only rely on a single field's model, and thus you set the `model` property on the `displayOptions` object to only use the value of that field's model.

```js
// Option 2 - single model
data() {
  return {
    uiSchema: [{
      component: 'div',
      children: [{
        component: 'div',
        displayOptions: {
          // Here we set to use only the value of the firstName model
          model: 'firstName',
          schema: {
            type: 'string',
            minLength: 3
          }
        }
      }]
    }]
  }
}
```

## Usage with transitions

To get some nice transitions all that is needed is to nest the component in a `transition` or `transition-group` field.
Check out the [Vue.js guide on transitions](https://vuejs.org/v2/guide/transitions.html) for more info.

```js
data() {
  return {
    uiSchema: [{
      component: 'transition',
      fieldOptions: {
        // Set the name prop to `fade`
        props: {
          name: 'fade',
          // Any transition props such as `enter-class`
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
  }
}
```
