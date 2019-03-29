import computed from './computed';
import data from './data';
import methods from './methods';
import props from './props';
import watch from './watch';

const vfjsGlobalMixin = {
  model: {
    prop: 'model',
    event: 'change',
  },
  created() {
    this.vfjsInitialize();
  },
  beforeDestroy() {
    this.vfjsDestroy();
  },
  computed,
  data,
  props,
  methods,
  watch,
};

export default vfjsGlobalMixin;
