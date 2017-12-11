import vfsViewer from './vfs-viewer';

const plugin = {
  install(Vue, options) {
    Vue.component('vue-form-json-schema-viewer', vfsViewer);
  },
};

export default plugin;
