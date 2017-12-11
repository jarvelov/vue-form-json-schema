import vfsBus from './vfs-bus';
import vfsModel from './vfs-model';
import vfsState from './vfs-state';
import vfsLifecycle from './vfs-lifecycle';
import vfsSchema from './vfs-schema';
import vfsUi from './vfs-ui';
import vfsValidation from './vfs-validation';

const vfsMethods = {
  ...vfsBus,
  ...vfsLifecycle,
  ...vfsModel,
  ...vfsSchema,
  ...vfsState,
  ...vfsUi,
  ...vfsValidation,
};

export default vfsMethods;
