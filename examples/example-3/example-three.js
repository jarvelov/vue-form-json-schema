const template = `
  <div id="example-three" class="container mb-3 mt-3">
    <h3>Example #3 <small class="text-muted">Conditional visibility and animation example</small></h3>

    <p class="text-center font-weight-bold"><a href="https://codesandbox.io/s/k0q8wk946o" target="_blank" rel="noopener noreferrer">Click here to edit this demo</a></p>
    <p class="text-center font-weight-bold"><a href="https://k0q8wk946o.codesandbox.io/" target="_blank" rel="noopener noreferrer">Click here to show this demo in a separate window</a></p>

    <div class="mb-3">
      <vue-form-json-schema
        :model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        v-on:change="onChange"
        v-on:state-change="onChangeState"
        v-on:validated="onValidated"
      >
      </vue-form-json-schema>
    </div>

    <hr />

    <p>
      <span>In this example some fields remain hidden until a certain criteria is met.</span>
      <span>We couple that with the <code>&lt;transition&gt;</code> element to show a nice animation when the element comes into and disappears from the view.</span>
    </p>
    <p>
      <span>To create a condition we use the <code>displayOptions</code> property on a ui-schema field.</span>
      <span>The condition is simply a JSON Schema and can make use of any available JSON Schema logic.</span>
      <span>To make it easier to write conditions a <code>model</code> property can be set on the <code>displayOptions</code> object to target a specific field's model.</span>
    </p>
    <p>
      <span>Here we target the first animation to appear when <code>firstName</code> is longer than 3 characters.</span>&nbsp;<span>The second animation is set to appear when both <code>firstName</code> and <code>lastName</code> are at least 3 characters or longer</span>
    </p>

    <h5>Prevent content being pushed around with a fixed height</h5>
    <p>
      <span>We can set a height to preserve the space where the animated divs will pop in.</span>
      <span>This avoids the issue of the added divs pushing the content below down and up when transitioning in and out</span>
    </p>

    <button class="btn btn-primary" v-on:click="onToggleStaticHeight">Click here to <strong>{{staticHeight ? 'disable' : 'enable'}}</strong> fixed height</button>

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

window.Vue.component('example-three', {
  name: 'example-three',
  data() {
    return {
      model: {},
      state: {},
      staticHeight: false,
      valid: false,
    };
  },
  computed: {
    schema() {
      return {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
        },
      };
    },
    uiSchema() {
      return [
        {
          component: 'div',
          fieldOptions: {
            class: 'row mb-3',
          },
          children: [
            {
              component: 'div',
              fieldOptions: {
                class: 'col',
              },
              children: [
                {
                  component: 'input',
                  model: 'firstName',
                  fieldOptions: {
                    attrs: {
                      placeholder: 'Please enter your first name',
                    },
                    class: ['form-control'],
                    on: ['input'],
                  },
                },
              ],
            },
            {
              component: 'div',
              fieldOptions: {
                class: 'col',
              },
              children: [
                {
                  component: 'input',
                  model: 'lastName',
                  fieldOptions: {
                    attrs: {
                      placeholder: 'Please enter your last name',
                    },
                    class: ['form-control'],
                    on: ['input'],
                  },
                },
              ],
            },
          ],
        },
        {
          component: 'div',
          fieldOptions: {
            class: 'row mb-3',
            style: {
              // We can set a height to preserve the space where the animated divs will pop in
              // This avoids the issue of the added divs pushing the content below down and up
              // when transitioning in and out
              height: this.staticHeight ? '24px' : 'auto',
            },
          },
          children: [
            {
              component: 'div',
              fieldOptions: {
                class: 'col',
              },
              children: [
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
                      displayOptions: {
                        model: 'firstName',
                        schema: {
                          type: 'string',
                          minLength: 3,
                        },
                      },
                      children: [
                        {
                          component: 'div',
                          fieldOptions: {
                            domProps: {
                              innerHTML: 'First animation',
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              component: 'div',
              fieldOptions: {
                class: 'col',
              },
              children: [
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
                      displayOptions: {
                        schema: {
                          properties: {
                            firstName: {
                              type: 'string',
                              minLength: 3,
                            },
                            lastName: {
                              type: 'string',
                              minLength: 3,
                            },
                          },
                          required: ['firstName', 'lastName'],
                        },
                      },
                      children: [
                        {
                          component: 'div',
                          fieldOptions: {
                            domProps: {
                              innerHTML: 'Second animation',
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
        },
      ];
    },
  },
  methods: {
    onToggleStaticHeight() {
      this.staticHeight = !this.staticHeight;
    },
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
  template: '<example-three />',
});
