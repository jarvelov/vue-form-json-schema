import vfjsFieldMixin from '../vfjs-field-mixin';
import vfjsHelperCreateElement from '../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperCreateElement';

const VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [vfjsFieldMixin],
  render() {
    return vfjsHelperCreateElement(
      this.vfjsComponent,
      {
        ...this.getVfjsAttributes(),
      },
      this.getVfjsChildren(),
    );
  },
};

export default VueFormJsonSchemaFieldComponent;
