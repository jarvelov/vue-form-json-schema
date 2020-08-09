/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import VueFormJsonSchema from '../../dist/vue-form-json-schema.esm.js';
import registerComponents from '../../examples/components/register';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.component('vue-form-json-schema', VueFormJsonSchema);

  registerComponents(Vue);
};
