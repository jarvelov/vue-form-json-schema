const template = `
  <div id="example-six" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example Lazy Load</h3>
    <p class="lead">
      <span>Lazy load a component</span>
    </p>

    <p>
      <span>In this example we use a lazy loaded component</span>
    </p>

    <form @submit="onSubmit" novalidate>
      <vue-form-json-schema
        :model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        :options="options"
        :components="$options.components"
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

window.Vue.component('example-six', {
  name: 'example-six',
  template,
  components: {
    'async-input': () => ({
      loading: {
        template: '<div>Loading...</div>',
      },
      error: {
        template: '<div>Something went wrong while loading...</div>',
      },
      component: new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: 'async-input',
            render(h) {
              return h(
                'input',
                {
                  attrs: {
                    ...this.$attrs,
                  },
                  on: { ...this.$listeners },
                },
                this.$slots.default,
              );
            },
          });
        }, 3000);
      }),
    }),
  },
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
        required: ['firstName', 'lastName'],
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
              component: 'async-input',
              model: 'lastName',
              fieldOptions: {
                class: ['form-control'],
                on: ['input'],
                attrs: {
                  id: 'last-name',
                  placeholder: 'Last name',
                },
              },
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
