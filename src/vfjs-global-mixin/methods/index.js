import vfjsBus from './vfjs-bus';
import vfjsHelpers from './vfjs-helpers';
import vfjsLifecycle from './vfjs-lifecycle';
import vfjsModel from './vfjs-model';
import vfjsState from './vfjs-state';
import vfjsSchema from './vfjs-schema';
import vfjsUi from './vfjs-ui';
import vfjsValidation from './vfjs-validation';

const vfjsMethods = {
  ...vfjsBus,
  ...vfjsLifecycle,
  ...vfjsHelpers,
  ...vfjsModel,
  ...vfjsSchema,
  ...vfjsState,
  ...vfjsUi,
  ...vfjsValidation,
};

export default vfjsMethods;
