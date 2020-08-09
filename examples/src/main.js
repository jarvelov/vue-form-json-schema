import Vue from "vue";
import App from "./App";
import Sidebar from "./Sidebar";
import VueFormJsonSchema from "vue-form-json-schema";
import registerComponents from "../components/register";
import "../styles/example.styl";

Vue.config.productionTip = false;

Vue.component("sidebar", Sidebar);
Vue.component("vue-form-json-schema", VueFormJsonSchema);

registerComponents(Vue);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
