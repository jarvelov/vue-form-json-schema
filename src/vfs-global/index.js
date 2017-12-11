import computed from './computed';
import data from './data';
import methods from './methods';
import props from './props';
import watch from './watch';

const vfsGlobalMixin = {
  created() {
    this.vfsInitialize();
  },
  beforeDestroy() {
    this.vfsDestroy();
  },
  computed,
  data,
  props,
  methods,
  watch,
};

export default vfsGlobalMixin;
