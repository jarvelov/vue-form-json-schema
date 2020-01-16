const template = `
  <div id="example-eight" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #7 <small class="text-muted">Required attribute example</small></h3>
    <p class="lead">
      <span>An example showing how the required attribute is dynamically set on fields.</span>
    </p>

    <form @submit="onSubmit" novalidate>
      <vue-form-json-schema
        :model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        :options="options"
        v-on:change="onChange"
        v-on:state-change="onChangeState"
        v-on:validated="onValidated"
      >
      </vue-form-json-schema>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Submit form
        </button>
      </div>
    </form>

    <hr />

    <h4>Model</h4>
    <pretty-print :value="model"></pretty-print>

    <h4>Options</h4>
    <pretty-print :value="options"></pretty-print>

    <h4>Schema</h4>
    <pretty-print :value="schema"></pretty-print>

    <h4>UI Schema</h4>
    <pretty-print :value="uiSchema"></pretty-print>

    <h4>State</h4>
    <pretty-print :value="state"></pretty-print>

    <h4>Valid</h4>
    <div>{{ valid }}</div>
  </div>
`;

window.Vue.component('example-eight', {
  name: 'example-eight',
  template,
  data() {
    return {
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
        required: ['firstName'],
        if: {
          required: ['firstName'],
          properties: {
            firstName: {
              const: 'foo',
            },
          },
        },
        then: {
          required: ['lastName'],
        },
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
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
      ],
    };
  },
  methods: {
    onChange(value) {
      this.model = value;
    },
    onChangeState(value) {
      this.state = value;
    },
    onValidated(value) {
      this.valid = value;
    },
    onSubmit(e) {
      e.preventDefault();

      this.submitted = true;
      this.options = {
        ...this.options,
        showValidationErrors: true,
      };

      if (this.valid) {
        this.success = true;
      }
    },
  },
});

window.Vue.config.productionTip = false;

/* eslint-disable no-new */
new window.Vue({
  el: '#app',
  template: '<example-eight />',
});
