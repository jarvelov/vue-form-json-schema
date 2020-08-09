<template>
  <div id="app">
    <div class="content">
      <sidebar @change="setComponent" :items="examples" :value="example" />
      <div class="wrapper">
        <div class="container">
          <component v-if="example" :is="example" />
          <div v-if="!example">
            Select an example in the sidebar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App",
  data() {
    return {
      example: null
    };
  },
  computed: {
    examples() {
      return this.$examples();
    }
  },
  methods: {
    setComponent(value) {
      this.example = Vue.options.components[value];
    }
  }
};
</script>
