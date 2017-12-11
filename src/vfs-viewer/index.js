import vfsGlobalMixin from '../vfs-global';

const VueFormJsonSchemaViewer = {
  name: 'VueFormJsonSchemaViewer',
  mixins: [vfsGlobalMixin],
  computed: {
    fields() {
      return this.createFields(this.vfsFields);
    },
  },
  methods: {
    createField({ component, children, props }) {
      return component
        ? this.$createElement(component, {
          props,
        }, this.createFields(children))
        : false;
    },
    createFields(fields) {
      return fields.map(this.createField).filter(field => field);
    },
  },
  render() {
    return this.$createElement(this.tag, this.fields);
  },
};

export default VueFormJsonSchemaViewer;
