# Vue Form JSON Schema

A [JSON schema](json-schema.org) based form generator without any fields! Use any HTML element or Vue component

`vue-form-json-schema` tries to not make any assumptions about how your form is structured.

There are no prebuilt components for you to puzzle your form together with. Instead **any Vue component or HTML element** which can emit an event* can be used with this form generator.

> Note that essentially all Vue components that uses `v-model` emits an `input` event.
