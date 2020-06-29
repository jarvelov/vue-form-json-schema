# dynamicOptions

Sometimes a field needs to have properties added/removed when a field has a certain value. This is where `dynamicOptions` comes into play.
`dynamicOptions` can alter any of a [field's top level properties](../field.md), like `children`, `component`, `fieldOptions` etc. when the given `schema` is `true` or `false`. The behavior is the same as [displayOptions](displayOptions.md), however in contrast to `displayOptions` you can pass in an array of options by using an array.

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
        dynamicOptions: {
          schema: {
            type: object,
            properties: {
              firstName: {
                type: 'string',
                minLength: 3
              }
            },
            required: ['firstName']
          },
          options: {
            // any of a field's top level property is valid here
            fieldOptions: {
              // any value that is valid in fieldOptions can be used here
              class: ['text-success']
            }
          }
        }
      }]
    }]
  }
}
```

## Single

The Full option can be a bit verbose when you only rely on a single field's model, and thus you set the `model` property on the `displayOptions` object to only use the value of that field's model.

```js
// Option 2 - single schema
data() {
  return {
    uiSchema: [{
      component: 'div',
      children: [{
        component: 'div',
        // Here we use an array of dynamic options, but you don't have to do that just to use the single schema
        // You can just as well use an object like in the "Full" example above.
        dynamicOptions: [
          {
            // Here we set to use the firstName model as the value to evaluate the schema against
            model: 'firstName',
            schema: {
              type: 'string',
              minLength: 3
            },
            options: {
              // any of a field's top level property is valid here
              fieldOptions: {
                // any value that is valid in fieldOptions can be used here
                class: ['text-success'],
                domProps: {
                  innerHTML: 'Looking good, person with a first name with more than 3 characters!'
                }
              }
            }
          },
          {
            model: 'firstName',
            schema: {
              type: 'string',
              maxLength: 2
            },
            options: {
              // any of a field's top level property is valid here
              fieldOptions: {
                // any value that is valid in fieldOptions can be used here
                class: ['text-warning'],
                domProps: {
                  innerHTML: 'Hey, that is cool! Your first name is less than or equal to 2 characters!'
                }
              }
            }
          }
        ]
      }]
    }]
  }
}
```
