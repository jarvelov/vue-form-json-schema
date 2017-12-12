import computed from './computed';
import methods from './methods';
import props from './props';

const vfjsFieldMixin = {
  mounted() {
    this.vfjsFieldHelperAddListener(this.$el, 'blur');
  },
  beforeDestroy() {
    this.vfjsFieldHelperRemoveListener(this.$el, 'blur');
  },
  computed,
  props,
  methods,
};

export default vfjsFieldMixin;
