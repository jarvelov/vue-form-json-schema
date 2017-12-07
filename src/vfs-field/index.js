import data from './data';
import methods from './methods';
import props from './props';
import vfsMethodsMixin from '../vfs-methods';

const vfsFieldMixin = {
  mixins: [vfsMethodsMixin],
  data,
  props,
  methods,
};

export default vfsFieldMixin;
