<template>
  <div class="sidebar">
    <h1>Examples</h1>
    <div v-for="item in items" :key="item.name">
      <a @click.prevent="change(item.value)" href="#">
        <div :class="item.name == value ? 'selected-component' : ''">
          {{ item.label }}
        </div>
      </a>
      <div class="description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  props: ["items", "value"],
  methods: {
    change(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style scoped>
.sidebar {
  max-width: 25%;
  min-width: 20%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: auto;
  padding: 12px 8px;

  word-break: break-all;
  white-space: pre-line;

  border-right: 1px solid;
}

.selected-component {
  font-weight: 600;
}
</style>
