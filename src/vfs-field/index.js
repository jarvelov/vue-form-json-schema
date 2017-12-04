import props from './props';
import vfsMethodsMixin from '../vfs-methods';

const vfsFieldMixin = {
  mixins: [vfsMethodsMixin],
  props,
};

export default vfsFieldMixin;
