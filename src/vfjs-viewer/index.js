import vfjsGlobalMixin from '../vfjs-global';

const VueFormJsonSchemaViewer = {
  name: 'vue-form-json-schema-viewer',
  mixins: [vfjsGlobalMixin],
  render() {
    return this.$createElement(this.tag, this.vfjsFields);
  },
};

export default VueFormJsonSchemaViewer;
