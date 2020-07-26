import Vue from "vue";
import App from "./App";
import VueFormJsonSchema from "vue-form-json-schema";
import CollapsePrettyPrint from "../../components/CollapsePrettyPrint.vue";
import PrettyPrint from "../../components/PrettyPrint.vue";
import Message from "../../components/Message.vue";
import '../../styles/example.styl';

Vue.config.productionTip = false;

Vue.component("vue-form-json-schema", VueFormJsonSchema);
Vue.component("pretty-print", PrettyPrint);
Vue.component("collapse-pretty-print", CollapsePrettyPrint);
Vue.component("message", Message);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
