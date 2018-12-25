import vfjsGlobalMixin from '../vfjs-global-mixin';

const VueFormJsonSchema = {
  name: 'vue-form-json-schema',
  mixins: [vfjsGlobalMixin],
  render() {
    return this.$createElement(this.tag, this.vfjsFields);
  },
};

export default VueFormJsonSchema;
