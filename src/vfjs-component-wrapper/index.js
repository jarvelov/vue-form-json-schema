import vfjsComponentMixin from '../vfjs-component';

const vfjsComponentWrapper = {
  name: 'vue-form-json-schema-field-wrapper',
  mixins: [vfjsComponentMixin],
  render() {
    return this.$createElement(this.component, {
      ...this.getVfjsAttributes(),
    }, this.$slots.default);
  },
};

export default vfjsComponentWrapper;
