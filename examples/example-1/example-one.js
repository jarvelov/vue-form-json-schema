const template = `
  <div id="example-one" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #1 <small class="text-muted">Minimal example</small></h3>
    <p class="lead">
      <span>A minimal example showing a simple <code>input</code> field.</span>
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

window.ExampleOne = {
  name: 'example-one',
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
        },
      },
      uiSchema: [
        {
          component: 'input',
          model: 'firstName',
          fieldOptions: {
            class: ['form-control'],
            on: ['input'],
            attrs: {
              placeholder: 'Please enter your first name',
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
};

const app = window.Vue.createApp({
  el: '#app',
  template: '<example-one />',
  components: {
    'example-one': window.ExampleOne,
  },
});

app.component('pretty-print', window.PrettyPrint);
app.use(window.VueFormJsonSchema.vfjsPlugin);

app.config.productionTip = false;

app.mount('#app');
