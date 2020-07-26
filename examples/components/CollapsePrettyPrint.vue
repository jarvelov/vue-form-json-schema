<template>
  <div>
    <div
      class="heading"
      @keydown="(e) => console.log('heyo enter')"
      @click="(e) => toggle(e, 'uiSchema')"
    >
      <strong>UI Schema</strong>
      <a href="#" @click="preventDefault">{{
        collapsed.uiSchema ? 'Show' : 'Hide'
      }}</a>
    </div>
    <div v-if="!collapsed.uiSchema">
      <pretty-print :value="uiSchema" />
    </div>

    <div class="heading" @click="(e) => toggle(e, 'model')">
      <strong>Model</strong>
      <a href="#" @click="preventDefault">{{
        collapsed.model ? 'Show' : 'Hide'
      }}</a>
    </div>
    <div v-if="!collapsed.model">
      <pretty-print :value="model" />
    </div>

    <div class="heading" @click="(e) => toggle(e, 'schema')">
      <strong>Schema</strong>
      <a href="#" @click="preventDefault">{{
        collapsed.schema ? 'Show' : 'Hide'
      }}</a>
    </div>
    <div v-if="!collapsed.schema">
      <pretty-print :value="schema" />
    </div>

    <div class="heading" @click="(e) => toggle(e, 'state')">
      <strong>State</strong>
      <a href="#" @click="preventDefault">{{
        collapsed.state ? 'Show' : 'Hide'
      }}</a>
    </div>
    <div v-if="!collapsed.state">
      <pretty-print :value="state" />
    </div>

    <div class="heading" @click="(e) => toggle(e, 'valid')">
      <strong>Valid</strong>
      <a href="#" @click="preventDefault">{{
        collapsed.valid ? 'Show' : 'Hide'
      }}</a>
    </div>
    <div v-if="!collapsed.valid">
      <div class="language-js extra-class">
        <pre class="language-js"><code>{{ valid }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapse-pretty-print',
  props: ['model', 'uiSchema', 'schema', 'state', 'valid', 'defaultExpanded'],
  data() {
    return {
      collapsed: {
        model: true,
        uiSchema: true,
        schema: true,
        state: true,
        valid: true,
      },
    };
  },
  created() {
    if (this.defaultExpanded) {
      this.defaultExpanded.forEach((key) => {
        this.collapsed[key] = false;
      });
    }
  },
  methods: {
    toggle(e, key) {
      this.preventDefault(e);

      this.collapsed[key] = !this.collapsed[key];
    },
    preventDefault(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    },
  },
};
</script>

<style scoped>
.heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid transparent;
}

.heading + .heading {
  margin-top: 8px;
}

.heading:hover {
  border-bottom: 1px solid #eaecef;
  cursor: pointer;
}

.heading a {
  pointer-events: none;
}
</style>
