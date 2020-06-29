const template = `
<div id="example-eight" class="container mb-3 mt-3">
  <h1>vue-form-json-schema</h1>
  <h3>
    Example #8
    <small class="text-muted">Registration form example using <a href="https://composition-api.vuejs.org/">Vue's composition API</a></small>
  </h3>

  <form @submit="onSubmit" novalidate>
    <vue-form-json-schema
      v-model="mixinState.model"
      :schema="mixinState.schema"
      :ui-schema="mixinState.uiSchema"
      :options="mixinState.options"
      v-on:state-change="onChangeState"
      v-on:validated="onValidated"
      ref="form"
    ></vue-form-json-schema>

    <div class="form-group">
      <button type="submit" class="btn btn-primary">Submit form</button>
    </div>

    <transition name="fade" mode="out-in">
      <div
        v-if="mixinState.submitted && mixinState.success"
        class="alert alert-success"
        key="success"
      >Form submitted successfully!</div>
      <div
        v-if="
          mixinState.submitted &&
            !mixinState.success &&
            mixinState.state.vfjsErrors &&
            mixinState.state.vfjsErrors.length > 0
        "
        class="alert alert-danger"
        key="has-errors"
      >Form has errors, please fix and resubmit!</div>
      <div
        v-if="
          mixinState.submitted &&
            !mixinState.success &&
            mixinState.state.vfjsErrors &&
            mixinState.state.vfjsErrors.length === 0
        "
        class="alert alert-success"
        key="has-no-errors"
      >Form errors have been corrected. You can now resubmit the form.</div>
    </transition>
  </form>

  <hr>

  <h4>Valid</h4>
  <div>{{mixinState.valid}}</div>

  <h4>Model</h4>
  <pretty-print :value="mixinState.model"></pretty-print>

  <h4>Options</h4>
  <pretty-print :value="mixinState.options"></pretty-print>

  <h4>Schema</h4>
  <pretty-print :value="mixinState.schema"></pretty-print>

  <h4>UI Schema</h4>
  <pretty-print :value="mixinState.uiSchema"></pretty-print>

  <h4>State</h4>
  <pretty-print :value="mixinState.state"></pretty-print>
</div>
`;

window.Vue.use(window.vueCompositionApi.default);

window.Vue.component('example-eight', {
  name: 'example-eight',
  template,
  setup() {
    const { mixinState } = window.useFormFields();

    function onChangeState(value) {
      mixinState.state = value;
    }

    function getDataFromAPI() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            firstName: 'Firstname',
            lastName: 'Lastname',
            age: 18,
          });
        }, 1000);
      });
    }

    function onValidated(value) {
      mixinState.valid = value;
    }

    function onSubmit(e) {
      e.preventDefault();

      mixinState.submitted = true;
      mixinState.options = {
        ...mixinState.options,
        showValidationErrors: true,
      };

      if (mixinState.valid) {
        mixinState.success = true;
      }
    }

    window.vueCompositionApi.onMounted(() => {
      getDataFromAPI().then((response) => {
        mixinState.model = { ...response };
      });
    });

    return {
      mixinState,
      onChangeState,
      onValidated,
      onSubmit,
    };
  },
});

window.Vue.config.productionTip = false;

/* eslint-disable no-new */
new window.Vue({
  el: '#app',
  template: '<example-eight />',
});
