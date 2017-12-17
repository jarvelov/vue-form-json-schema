# vue-form-json-schema

| Property | Value | Description  |
| ---------|-------| -------------|
| tag | [HTML element tag name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) | Render the `vue-form-json-schema` element with this tag name |
| model | `Object` | The form values |
| options | `Object` | See [Options](#options) |

```html
<script>

</script>

<template>
  <vue-form-json-schema
    tag="div"
    :model="model"
    :options="options"
    :schema="schema"
    :ui-schema="uiSchema"
    v-on:change="onModelUpdate"
    v-on:state-change="onStateUpdate"
    v-on:validated="onValidatedUpdate"
  />
</template>
```
