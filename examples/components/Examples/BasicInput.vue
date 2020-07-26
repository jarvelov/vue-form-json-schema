<template>
  <div>
    <h3>Form</h3>

    <hr />

    <form class="form-wrapper" @submit="onSubmit" novalidate>
      <div v-if="!submitted">
        <vue-form-json-schema
          v-model="model"
          :schema="schema"
          :ui-schema="uiSchema"
          @state-change="onChangeState"
          @validated="onValidated"
        />
        <button type="submit" :disabled="submitCount > 0 && !valid">
          Submit
        </button>
        <div v-if="submitCount > 0 && !valid">The form is invalid!</div>
      </div>
    </form>
    <p v-if="submitted">
      The form was successfully submitted!
      <a href="#" @click="onReset">Reset form</a>
    </p>

    <h3>Form data</h3>
    <hr />

    <collapse-pretty-print
      :model="model"
      :uiSchema="uiSchema"
      :schema="schema"
      :state="state"
      :valid="valid"
    />
  </div>
</template>

<script>
export default {
  name: 'example-basic-input-checkbox',
  data() {
    return {
      model: {},
      state: {},
      valid: false,
      submitted: false,
      submitCount: 0,
      schema: {
        type: 'object',
        required: ['firstName'],
        properties: {
          firstName: {
            type: 'string',
          },
        },
      },
      uiSchema: [
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
                  for: 'is-checked',
                },
                domProps: {
                  innerHTML: 'First name',
                },
              },
            },
            {
              component: 'input',
              model: 'firstName',
              fieldOptions: {
                on: ['input'],
                attrs: {
                  id: 'is-checked',
                },
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChangeState(value) {
      this.state = value;
    },
    onValidated(value) {
      this.valid = value;
    },
    onReset(e) {
      e.preventDefault();

      this.model = {};
      this.state = {};
      this.valid = false;

      this.submitCount = 0;
      this.submitted = false;
    },
    onSubmit(e) {
      e.preventDefault();

      this.submitCount += 1;

      if (this.valid) {
        this.submitted = true;
      }
    },
  },
};
</script>
