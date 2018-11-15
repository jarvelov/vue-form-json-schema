import vfjsViewer from './vfjs-viewer';

const plugin = {
  install(
    Vue,
    options = {
      component: 'vue-form-json-schema-viewer',
    },
  ) {
    Vue.component(options.component, vfjsViewer);
  },
};

export default plugin;
