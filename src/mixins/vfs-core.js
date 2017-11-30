import vfsBusMixin from './vfs-bus';
import vfsDataMixin from './vfs-data';
import vfsMethodsMixin from './vfs-methods';

const vfsCoreMixin = {
  ...vfsBusMixin,
  ...vfsDataMixin,
  ...vfsMethodsMixin,
};

export default vfsCoreMixin;
