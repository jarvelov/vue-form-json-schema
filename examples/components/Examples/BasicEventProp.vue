<template>
  <div>
    <h3>Form</h3>

    <hr />

    <vue-form-json-schema
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      @state-change="onChangeState"
      @validated="onValidated"
    />

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
        {
          component: 'div',
          fieldOptions: {
            class: ['form-group'],
          },
          children: [
            {
              component: 'span',
              fieldOptions: {
                domProps: {
                  innerHTML: 'Your first name is: ',
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
  },
};
</script>
