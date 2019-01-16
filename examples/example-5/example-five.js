const template = `
<div>
  <div id="example-five" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #5 <small class="text-muted">Async loading of form</small></h3>
    <p class="lead">
      <span
        >An example to show how to use remotely loaded JSON schema/uiSchema and
        model</span
      >
    </p>

    <vue-form-json-schema
      v-if="this.loaded"
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      v-on:change="onChange"
      v-on:state-change="onChangeState"
      v-on:validated="onValidated"
    >
    </vue-form-json-schema>
    <div class="alert alert-info" v-if="!this.loaded">
      <h4 class="alert-heading">Hang on!</h4>
      <div>Loading form...</div>
    </div>
    <div v-if="this.loaded" class="text-center mt-2">
      <button class="btn btn-primary" @click="getForm">Reload form</button>
    </div>

    <hr />

    <p>
      <span>
        This demo shows how the <code>schema</code>,&nbsp;
        <code>uiSchema</code> and the <code>model</code> can be fetched from an
        API and rendered at a later time.
      </span>
    </p>

    <p>
      <span>
        In this demo we use <code>setTimeout</code> to simulate an asynchronous
        action so that the form can "loaded" after 5 seconds.
      </span>
    </p>

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
</div>
`;

window.Vue.component('example-five', {
  name: 'example-five',
  template,
  data() {
    return {
      model: {},
      state: {},
      valid: false,
      schema: {},
      uiSchema: [],
      loaded: false,
      delay: 5000,
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
    getUiSchemaFromAPI() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
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
          ]);
        }, this.delay);
      });
    },
    getSchemaFromAPI() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            type: 'object',
            required: ['firstName'],
            properties: {
              firstName: {
                type: 'string',
              },
            },
          });
        }, this.delay);
      });
    },
    getDataFromAPI() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            firstName: 'Tobias',
          });
        }, this.delay);
      });
    },
    getForm() {
      // Reset properties
      this.uiSchema = [];
      this.schema = [];
      this.model = [];

      // Set form as not loaded
      this.loaded = false;

      // Get the data from the API
      return Promise.all([
        this.getUiSchemaFromAPI(),
        this.getSchemaFromAPI(),
        this.getDataFromAPI(),
      ]).then(([uiSchema, schema, model]) => {
        // Update the form properties with data from the API
        this.uiSchema = uiSchema;
        this.schema = schema;
        this.model = model;

        // Set form as loaded
        this.loaded = true;
      });
    },
  },
  created() {
    this.getForm();
  },
});

window.Vue.config.productionTip = false;

/* eslint-disable no-new */
new window.Vue({
  el: '#app',
  template: '<example-five />',
});
