import vfsBusMixin from '../vfs-bus';
import vfsDataMixin from '../vfs-data';
import vfsMethodsMixin from '../vfs-methods';
import computed from './computed';
import methods from './methods';
import props from './props';
import watch from './watch';

const vfsGlobalMixin = {
  mixins: [vfsBusMixin, vfsDataMixin, vfsMethodsMixin],
  created() {
    this.vfsInitialize();
  },
  props,
  computed,
  methods,
  watch,
};

export default vfsGlobalMixin;
