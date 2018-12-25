import vfjsGlobalComponent from './vfjs-global-component';

const plugin = {
  install(
    Vue,
    options = {
      component: 'vue-form-json-schema',
    },
  ) {
    Vue.component(options.component, vfjsGlobalComponent);
  },
};

export default plugin;
