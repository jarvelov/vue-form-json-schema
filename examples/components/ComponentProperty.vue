<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: "component-property",
  props: ["name", "value"],
  computed: {
    examples() {
      return this.$examples();
    },
    text() {
      const example = this.examples.find(({ value }) => value === this.name);
      if (example) {
        return example[this.value];
      }

      return null;
    }
  }
};
</script>
