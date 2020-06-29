window.useFormFields = () => {
  const mixinState = window.vueCompositionApi.reactive({
    model: {},
    state: {},
    valid: false,
    options: {
      castToSchemaType: true,
    },
    submitted: false,
    success: false,
    schema: {
      type: 'object',
      required: ['firstName', 'lastName', 'age'],
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        age: {
          type: 'number',
          minimum: 18,
        },
      },
    },
    uiSchema: [
      // Input for firstName
      {
        component: 'div',
        fieldOptions: {
          class: ['form-group'],
        },
        children: [
          {
            component: 'label',
            fieldOptions: {
              attrs: {
                for: 'first-name',
              },
              class: ['font-weight-bold'],
              domProps: {
                innerHTML: 'First name',
              },
            },
          },
          {
            component: 'input',
            model: 'firstName',
            errorOptions: {
              class: ['is-invalid'],
            },
            fieldOptions: {
              attrs: {
                id: 'first-name',
              },
              class: ['form-control'],
              on: ['input'],
            },
          },
          {
            component: 'small',
            fieldOptions: {
              class: ['text-muted'],
              domProps: {
                innerHTML: 'Please enter your first name',
              },
            },
          },
        ],
      },
      // Validation messages for firstName
      {
        component: 'transition',
        fieldOptions: {
          props: {
            name: 'fade',
          },
        },
        children: [
          {
            component: 'div',
            model: 'firstName',
            errorHandler: true,
            displayOptions: {
              model: 'firstName',
              schema: {
                not: {
                  type: 'string',
                },
              },
            },
            fieldOptions: {
              class: ['alert alert-danger'],
            },
            children: [
              {
                component: 'div',
                fieldOptions: {
                  domProps: {
                    innerHTML: 'This field is required',
                  },
                },
              },
            ],
          },
        ],
      },
      // Input for lastName
      {
        component: 'div',
        fieldOptions: {
          class: ['form-group'],
        },
        children: [
          {
            component: 'label',
            fieldOptions: {
              attrs: {
                for: 'last-name',
              },
              class: ['font-weight-bold'],
              domProps: {
                innerHTML: 'Last name',
              },
            },
          },
          {
            component: 'input',
            model: 'lastName',
            errorOptions: {
              class: ['is-invalid'],
            },
            fieldOptions: {
              attrs: {
                id: 'last-name',
              },
              class: ['form-control'],
              on: ['input'],
            },
          },
          {
            component: 'small',
            fieldOptions: {
              class: ['text-muted'],
              domProps: {
                innerHTML: 'Please enter your last name',
              },
            },
          },
        ],
      },
      // Validation messages for lastName
      {
        component: 'transition',
        fieldOptions: {
          props: {
            name: 'fade',
          },
        },
        children: [
          {
            component: 'div',
            model: 'lastName',
            errorHandler: true,
            displayOptions: {
              model: 'lastName',
              schema: {
                not: {
                  type: 'string',
                },
              },
            },
            fieldOptions: {
              class: ['alert alert-danger'],
            },
            children: [
              {
                component: 'div',
                fieldOptions: {
                  domProps: {
                    innerHTML: 'This field is required',
                  },
                },
              },
            ],
          },
        ],
      },
      // Input for age
      {
        component: 'div',
        fieldOptions: {
          class: ['form-group'],
        },
        children: [
          {
            component: 'label',
            fieldOptions: {
              attrs: {
                for: 'age',
              },
              class: ['font-weight-bold'],
              domProps: {
                innerHTML: 'Age',
              },
            },
          },
          {
            component: 'input',
            model: 'age',
            errorOptions: {
              class: ['is-invalid'],
            },
            fieldOptions: {
              attrs: {
                id: 'age',
                type: 'number',
                min: 0,
              },
              class: ['form-control'],
              on: ['input'],
            },
          },
          {
            component: 'small',
            fieldOptions: {
              class: ['text-muted'],
              domProps: {
                innerHTML: 'Please confirm that you are over 18 years of age',
              },
            },
          },
        ],
      },
      // Validation messages for age
      {
        component: 'transition',
        fieldOptions: {
          props: {
            name: 'fade',
            mode: 'out-in',
          },
        },
        children: [
          // Validation message shown when value is empty
          {
            component: 'div',
            model: 'age',
            errorHandler: true,
            displayOptions: {
              model: 'age',
              schema: {
                not: {
                  type: 'number',
                },
              },
            },
            fieldOptions: {
              class: ['alert alert-danger'],
            },
            children: [
              {
                component: 'div',
                fieldOptions: {
                  domProps: {
                    innerHTML: 'This field is required',
                  },
                },
              },
            ],
          },
          // Validation message when value < 18
          {
            component: 'div',
            model: 'age',
            errorHandler: true,
            displayOptions: {
              model: 'age',
              schema: {
                type: 'number',
                not: {
                  minimum: 18,
                },
              },
            },
            fieldOptions: {
              class: ['alert alert-danger'],
            },
            children: [
              {
                component: 'div',
                fieldOptions: {
                  domProps: {
                    innerHTML: 'You must be 18 or older to submit this form',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        component: 'div',
        fieldOptions: {
          class: ['form-group'],
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              class: ['font-weight-bold'],
              domProps: {
                innerHTML: 'Message (optional)',
              },
            },
          },
          {
            component: 'textarea',
            model: 'message',
            fieldOptions: {
              attrs: {
                placeholder: 'Type a message here...',
              },
              class: ['form-control'],
              on: ['input'],
            },
          },
        ],
      },
    ],
  });

  return { mixinState };
};
