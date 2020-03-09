const template = `
  <div id="example-eight" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #8 <small class="text-muted">Checkbox example</small></h3>
    <p class="lead">
      <span>A minimal example showing a simple <code>input checkbox</code> field.</span>
    </p>

    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      v-on:change="onChange"
      v-on:state-change="onChangeState"
      v-on:validated="onValidated"
    >
    </vue-form-json-schema>

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

window.Vue.component('example-eight', {
  name: 'example-eight',
  template,
  data() {
    return {
      model: {
        selection: true
      },
      state: {},
      valid: false,
      schema: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
          },
          selection: {
            type: 'boolean',
          },
          dropdwn: {
            type: 'string',
            enum: ['a','b','c']
          }
        },
      },
      uiSchema: [
        {
          component: 'input',
          model: 'firstName',
          fieldOptions: {
            on: ['input'],
          },
        },
        {
          component: 'input',
          model: 'selection',
          fieldOptions: {
            on: ['change'],
            attrs: {
              type: 'checkbox',
            },
          },
        },
        {
          component: 'select',
          model: 'dropdwn',
          fieldOptions: {
            on: ['change'],
          },
          children: [
            {
              component: 'option',
              fieldOptions: {
                attrs: {
                  value: 'a'
                },
                domProps: {
                  innerHTML: 'Choose A'
                }
              }
            },
            {
              component: 'option',
              fieldOptions: {
                attrs: {
                  value: 'b'
                },
                domProps: {
                  innerHTML: 'Choose B'
                }
              }
            },
          ]
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
  template: '<example-eight />',
});
