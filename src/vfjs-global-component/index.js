import vfjsGlobalMixin from '../vfjs-global-mixin';
import vfjsHelperCreateElement from '../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperCreateElement';

const VueFormJsonSchema = {
  name: 'vue-form-json-schema',
  ...vfjsGlobalMixin,
  render() {
    return vfjsHelperCreateElement(this.tag, [...this.vfjsFields]);
  },
};

export default VueFormJsonSchema;
