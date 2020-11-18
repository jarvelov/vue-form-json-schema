import {
  VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_MODELS_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_UPDATED,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
  VFJS_EVENT_UI_FIELDS_UPDATE,
} from '../../../../constants';

import vfjsEventFieldModelClearHidden from './vfjsEventFieldModelClearHidden';
import vfjsEventFieldModelValidate from './vfjsEventFieldModelValidate';
import vfjsEventFieldModelsValidate from './vfjsEventFieldModelsValidate';
import vfjsEventFieldModelUpdate from './vfjsEventFieldModelUpdate';
import vfjsEventFieldStateUpdate from './vfjsEventFieldStateUpdate';
import vfjsEventModelValidate from './vfjsEventModelValidate';
import vfjsEventUiFieldsUpdate from './vfjsEventUiFieldsUpdate';
import vfjsEventModelUpdated from './vfjsEventModelUpdated';
import vfjsEventStateUpdate from './vfjsEventStateUpdate';
import vfjsEventStateUpdated from './vfjsEventStateUpdated';

const vfjsBusActions = {
  [VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN]: vfjsEventFieldModelClearHidden,
  [VFJS_EVENT_FIELD_MODEL_VALIDATE]: vfjsEventFieldModelValidate,
  [VFJS_EVENT_FIELD_MODELS_VALIDATE]: vfjsEventFieldModelsValidate,
  [VFJS_EVENT_FIELD_MODEL_UPDATE]: vfjsEventFieldModelUpdate,
  [VFJS_EVENT_FIELD_STATE_UPDATE]: vfjsEventFieldStateUpdate,
  [VFJS_EVENT_MODEL_VALIDATE]: vfjsEventModelValidate,
  [VFJS_EVENT_UI_FIELDS_UPDATE]: vfjsEventUiFieldsUpdate,
  [VFJS_EVENT_MODEL_UPDATED]: vfjsEventModelUpdated,
  [VFJS_EVENT_STATE_UPDATE]: vfjsEventStateUpdate,
  [VFJS_EVENT_STATE_UPDATED]: vfjsEventStateUpdated,
};

export default vfjsBusActions;
