import computed from './computed';
import methods from './methods';
import props from './props';

const vfjsFieldMixin = {
  data() {
    return {
      vfjsSetFieldTimeout: null,
    };
  },
  computed,
  props,
  methods,
  mounted() {
    this.vfjsFieldHelperAddListener(this.$el, 'blur');
  },
  beforeDestroy() {
    this.vfjsFieldHelperRemoveListener(this.$el, 'blur');
  },
};

export default vfjsFieldMixin;
