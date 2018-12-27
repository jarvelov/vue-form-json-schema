const template = `
  <div id="example-two" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #2 <small class="text-muted">Nested UI example</small></h3>

    <p class="text-center font-weight-bold"><a href="https://codesandbox.io/s/882w4v374l" target="_blank" rel="noopener noreferrer">Click here to edit this demo</a></p>
    <p class="text-center font-weight-bold"><a href="https://882w4v374l.codesandbox.io/" target="_blank" rel="noopener noreferrer">Click here to show this demo in a separate window</a></p>

    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      v-on:change="onChange"
      v-on:state-change="onChangeState"
      v-on:validated="onValidated"
    >
    </vue-form-json-schema>

    <div>
      <span>This example uses the <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>&nbsp;<code>row</code> and <code>col-*</code>
        classes to create a two-column row for devices with larger screens and a single column row for devices with smaller screens.</span>
      <span>We also wrap each <code>input</code> in a <code>.form-group</code></span>
    </div>

    <hr />

    <h4>Model</h4>
    <pretty-print :value="model"></pretty-print>

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

window.Vue.component('example-two', {
  name: 'example-two',
  template,
  data() {
    return {
      model: {},
      state: {},
      valid: false,
      schema: {
        type: 'object',
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
        {
          component: 'div',
          fieldOptions: {
            class: 'row',
          },
          children: [
            {
              component: 'div',
              fieldOptions: {
                class: 'col-12 col-sm-6',
              },
              children: [
                {
                  component: 'div',
                  fieldOptions: {
                    class: 'form-group',
                  },
                  children: [
                    {
                      component: 'input',
                      model: 'firstName',
                      fieldOptions: {
                        class: ['form-control'],
                        on: ['input'],
                        attrs: {
                          placeholder: 'First name',
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
                class: 'col-12 col-sm-6',
              },
              children: [
                {
                  component: 'div',
                  fieldOptions: {
                    class: 'form-group',
                  },
                  children: [
                    {
                      component: 'input',
                      model: 'lastName',
                      fieldOptions: {
                        class: ['form-control'],
                        on: ['input'],
                        attrs: {
                          placeholder: 'Last name',
                        },
                      },
                    },
                  ],
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
  },
});

window.Vue.config.productionTip = false;

/* eslint-disable no-new */
new window.Vue({
  el: '#app',
  template: '<example-two />',
});
