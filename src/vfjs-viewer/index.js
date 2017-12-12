import vfjsGlobalMixin from '../vfjs-global';

const VueFormJsonSchemaViewer = {
  name: 'vue-form-json-schema-viewer',
  mixins: [vfjsGlobalMixin],
  computed: {
    fields() {
      // return this.vfjsHelperCreateComponents(this.vfjsFields);
      return this.createFields(this.vfjsFields);
    },
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
  methods: {
    createField({ component, children, props }) {
      return this.$createElement(component, {
        props,
      }, this.createFields(children));
    },
    createFields(fields) {
      return fields.map(this.createField).filter(field => field);
    },
  },
  render() {
    return this.$createElement(this.tag, {
      ...this.vfjsAttributes,
    }, this.fields);
  },
};

export default VueFormJsonSchemaViewer;
