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
      this.loaded = false;
      return Promise.all([
        this.getUiSchemaFromAPI().then((newUiSchema) => {
          this.uiSchema = newUiSchema;
        }),
        this.getSchemaFromAPI().then((newSchema) => {
          this.schema = newSchema;
        }),
        this.getDataFromAPI().then((newModel) => {
          this.model = newModel;
        }),
      ]).then(() => {
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
