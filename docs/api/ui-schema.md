# uiSchema

An array of [fields](ui-schema/field.md).

## Example

```js
  data() {
    return {
      uiSchema: [
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
      ]
    }
  }
```

The example above will do essentially the same thing as the following Vue template:

```html
<div class="form-group">
  <input v-model="model.firstName" />
</div>
```
