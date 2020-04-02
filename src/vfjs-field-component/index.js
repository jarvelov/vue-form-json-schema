import vfjsFieldMixin from '../vfjs-field-mixin';

const VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [vfjsFieldMixin],
  render() {
    return this.$createElement(
      this.vfjsComponent,
      {
        ...this.getVfjsAttributes(),
      },
      this.getVfjsChildren(),
    );
  },
};

export default VueFormJsonSchemaFieldComponent;
