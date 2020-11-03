import computed from './computed';
import methods from './methods';
import props from './props';

const vfjsFieldMixin = {
  data() {
    return {
      vfjsInternalModel: undefined,
    };
  },
  computed,
  props,
  methods,
  beforeUpdate() {
    // Unset the internal value before update to fall back to the 'value' prop
    if (this.vfjsFieldInternalModel) {
      this.vfjsInternalModel = undefined;
    }
  },
  mounted() {
    this.vfjsFieldHelperAddListener(this.$el, 'blur');
  },
  beforeDestroy() {
    this.vfjsFieldHelperRemoveListener(this.$el, 'blur');
  },
};

export default vfjsFieldMixin;
