<template>
  <div class="language-js extra-class">
    <pre class="language-js">
    <code v-html="this.prettyPrint(this.value)" />
  </pre>
  </div>
</template>

<script>
export default {
  name: 'pretty-print',
  props: {
    value: {
      type: null,
    },
  },
  methods: {
    prettyPrint(json) {
      if (json) {
        const stringified = JSON.stringify(json, null, 2);
        const stringifiedReplaced = stringified
          .replace(/&/g, '&')
          .replace(/</g, '<')
          .replace(/>/g, '>');
        const regex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|({|}|\.|,|;|\[|\]))/g;

        return stringifiedReplaced.replace(regex, (match) => {
          let className = 'token number';

          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              return match.substring(1, match.length - 2) + ':';
            } else {
              className = 'token string';
              match = match.replace(/\"/g, "'");
            }
          } else if (/true|false/.test(match)) {
            className = 'token boolean';
          } else if (/null/.test(match)) {
            className = 'token null';
          } else if (/{|}|\.|,|;|\[|\]/.test(match)) {
            className = 'token punctuation';
          }

          return `<span class="${className}">${match}</span>`;
        });
      }

      return '';
    },
  },
};
</script>

<style scoped>
code:first-child {
  margin-left: -1rem;
}
</style>
