const template = `
  <div id="example-one" class="container mb-3 mt-3">
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

window.Vue.component('example-one', {
  name: 'example-one',
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
        },
      },
      uiSchema: [
        {
          component: 'input',
          model: 'firstName',
          fieldOptions: {
            on: ['input'],
            attrs: {
            },
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
  template: '<example-one />',
});
