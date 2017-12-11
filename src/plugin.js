import vfjsViewer from './vfjs-viewer';

const plugin = {
  install(Vue, options) {
    Vue.component('vue-form-json-schema-viewer', vfjsViewer);
  },
};

export default plugin;
