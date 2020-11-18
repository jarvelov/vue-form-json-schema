import { get, isEqual, set } from 'lodash';
import {
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
} from '../../../../constants';

function vfjsEventFieldModelUpdate({ key, value: originalValue, cb }) {
  let value = originalValue;

  const { castToSchemaType = false } = this.vfjsOptions;
  if (castToSchemaType) {
    // Cast model to the type specified in its schema
    value = this.vfjsHelperCastValueToSchemaType(key, value);
  }

  const vfjsModel = this.vfjsHelperApplyFieldModel(key, value);

  this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
    vfjsModel,
    cb: (newVfjsState) => {
      const vfjsFieldModel = this.getVfjsFieldModel(key);
      if (!isEqual(vfjsFieldModel, value)) {
        set(newVfjsState, `${key}.vfjsFieldDirty`, true);
      }

      const vfjsFieldState = get(newVfjsState, `${key}`);
      const { vfjsFieldErrors = [] } = vfjsFieldState;
      this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
        value: newVfjsState,
        cb: () => {
          if (
            vfjsFieldErrors.length === 0 ||
            this.vfjsOptions.allowInvalidModel
          ) {
            this.setVfjsModel(vfjsModel);
          }

          if (cb && typeof cb === 'function') {
            cb();
          }
        },
      });
    },
  });
}

export default vfjsEventFieldModelUpdate;
