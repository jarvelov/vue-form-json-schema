import vfsMethodsGettersMixin from './vfs-methods-getters';
import vfsMethodsSettersMixin from './vfs-methods-setters';

const vfsMethodsMixin = {
  ...vfsMethodsGettersMixin,
  ...vfsMethodsSettersMixin,
};

export default vfsMethodsMixin;
