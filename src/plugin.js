import vfjsGlobalComponent from './vfjs-global-component';

// Declare install function executed by Vue.use()
export function install(
  Vue,
  options = {
    component: 'vue-form-json-schema',
  },
) {
  if (!install.installed) {
    install.installed = true;
    Vue.component(options.component, vfjsGlobalComponent);
  }
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue && typeof GlobalVue.use === 'function') {
  GlobalVue.use(plugin);
}

export default plugin;
