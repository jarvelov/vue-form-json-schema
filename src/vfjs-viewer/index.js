import vfjsGlobalMixin from '../vfjs-global';

const VueFormJsonSchemaViewer = {
  name: 'vue-form-json-schema-viewer',
  mixins: [vfjsGlobalMixin],
  computed: {
    validated() {
      return this.getVfjsValid();
    },
    vfjsAttributes() {
      return {
        class: this.vfjsAttributesClass,
      };
    },
    vfjsAttributesClass() {
      return (this.options.validationClass && this.validated)
        ? this.options.validationClass
        : '';
    },
  },
  render() {
    return this.$createElement(this.tag, {
      ...this.vfjsAttributes,
    }, this.vfjsFields);
  },
};

export default VueFormJsonSchemaViewer;
