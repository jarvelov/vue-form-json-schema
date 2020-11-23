import { h } from 'vue';

const vfjsHelperCreateElement = (...args) => {
  const createElement = h || window.Vue.h || this.$createElement;

  return createElement(...args);
};

export default vfjsHelperCreateElement;
