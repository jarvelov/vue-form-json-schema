import vfjsBus from './vfjs-bus';
import vfjsModel from './vfjs-model';
import vfjsState from './vfjs-state';
import vfjsLifecycle from './vfjs-lifecycle';
import vfjsSchema from './vfjs-schema';
import vfjsUi from './vfjs-ui';
import vfjsValidation from './vfjs-validation';

const vfjsMethods = {
  ...vfjsBus,
  ...vfjsLifecycle,
  ...vfjsModel,
  ...vfjsSchema,
  ...vfjsState,
  ...vfjsUi,
  ...vfjsValidation,
};

export default vfjsMethods;
