const template = `
  <div id="example-six" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #6 <small class="text-muted">Registration form example</small></h3>
    <p class="lead">
      <span>A medium complex example showing a registration form with validation and validation messages.</span>
    </p>

    <p>
      <span>In this example we configure the options property <code>castToSchemaType</code> to allow values to be cast to their correct type. Without this property all values would be strings for fields where the component is a regular HTML element, such as <code>input</code>, which would make any validation based on other types fail.</span>
    </p>

    <p>
      Try submitting the form empty and see what error messages you get. You can try typing a number less than <code>18</code> into the <strong>Age</strong> input field and moving to another field (i.e. causing a <code>blur</code> event). This will show you a different validation message when the condition <code>value &lt; 18</code> is met.
    </p>

    <p>
      Complete the form with valid information and you can see how the message below the submit button changes. A different message can be shown when all errors have been fixed to let the user know that it can now submit the form again and it will succeed.
    </p>

    <p>
      Try filling out the form correctly but enter a value less than <code>18</code> into the <strong>Age</strong> input field. You see that when you navigate away the validation message with the 18 year limit appear immediately.
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

      <transition name="fade" mode="out-in">
        <div v-if="submitted && success" class="alert alert-success" key="success">
          Form submitted successfully!
        </div>
        <div v-if="submitted && !success && state.vfjsErrors.length > 0" class="alert alert-danger" key="has-errors">
          Form has errors, please fix and resubmit!
        </div>
        <div v-if="submitted && !success && state.vfjsErrors.length === 0" class="alert alert-success" key="has-no-errors">
          Form errors have been corrected. You can now resubmit the form.
        </div>
      </transition>
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

window.Vue.component('example-six', {
  name: 'example-six',
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
        required: ['firstName', 'lastName', 'age', 'consent'],
        properties: {
          firstName: {
            type: 'string',
            minLength: 1,
          },
          lastName: {
            type: 'string',
            minLength: 1,
          },
          age: {
            type: 'number',
            minimum: 18,
          },
          message: {
            type: 'string',
          },
          consent: {
            type: 'boolean',
            const: true,
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
                    minLength: 1,
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
                    minLength: 1,
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
        // Radio buttons for consent
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
                  innerHTML: 'Terms and conditions',
                },
              },
            },
            {
              component: 'div',
              children: [
                {
                  component: 'span',
                  fieldOptions: {
                    domProps: {
                      innerHTML: 'Please acknowledge that you have read and accept our ',
                    },
                  },
                },
                {
                  component: 'a',
                  fieldOptions: {
                    attrs: {
                      href: '#',
                    },
                    domProps: {
                      innerHTML: 'Terms and conditions',
                    },
                  },
                },
              ],
            },
            // "Yes" radio button
            {
              component: 'div',
              fieldOptions: {
                class: ['form-check'],
              },
              children: [
                {
                  component: 'input',
                  model: 'consent',
                  errorOptions: {
                    class: ['is-invalid'],
                  },
                  fieldOptions: {
                    class: ['form-check-input'],
                    on: 'change',
                    attrs: {
                      id: 'consent-yes',
                      name: 'name',
                      type: 'radio',
                    },
                    domProps: {
                      value: true,
                    },
                  },
                },
                {
                  component: 'label',
                  fieldOptions: {
                    attrs: {
                      for: 'consent-yes',
                    },
                    class: ['form-check-label'],
                    domProps: {
                      innerHTML: 'Yes, I agree',
                    },
                  },
                },
              ],
            },
            // "No" radio button
            {
              component: 'div',
              fieldOptions: {
                class: ['form-check'],
              },
              children: [
                {
                  component: 'input',
                  model: 'consent',
                  errorOptions: {
                    class: ['is-invalid'],
                  },
                  fieldOptions: {
                    class: ['form-check-input'],
                    on: 'change',
                    attrs: {
                      id: 'consent-no',
                      name: 'name',
                      type: 'radio',
                    },
                    domProps: {
                      value: false,
                    },
                  },
                },
                {
                  component: 'label',
                  fieldOptions: {
                    attrs: {
                      for: 'consent-no',
                    },
                    class: ['form-check-label'],
                    domProps: {
                      innerHTML: 'No, I do not agree',
                    },
                  },
                },
              ],
            },
          ],
        },
        // Validation messages for consent
        {
          component: 'transition',
          fieldOptions: {
            props: {
              name: 'fade',
              mode: 'out-in',
            },
          },
          children: [
            // Validation message shown when an input has not been selected
            {
              component: 'div',
              model: 'consent',
              errorHandler: true,
              displayOptions: {
                model: 'consent',
                schema: {
                  not: {
                    type: 'boolean',
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
            // Validation message shown when the "No" input has been selected
            {
              component: 'div',
              model: 'consent',
              errorHandler: true,
              displayOptions: {
                model: 'consent',
                schema: {
                  const: false,
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
                      innerHTML:
                        'You must consent to our terms and conditions to submit this form.',
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
  template: '<example-six />',
});
