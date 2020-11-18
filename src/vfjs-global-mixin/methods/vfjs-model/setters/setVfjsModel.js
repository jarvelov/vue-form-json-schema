import { cloneDeep, isEqual } from 'lodash';
import {
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
  VFJS_EVENT_MODEL_UPDATED,
} from '../../../constants';

function setVfjsModel(model, silent = false) {
  if (!isEqual(model, this.vfjsModel)) {
    this.vfjsModel = cloneDeep(model);

    if (!silent) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
        vfjsModel: this.vfjsModel,
        cb: (newVfjsState) => {
          this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
            value: newVfjsState,
            cb: () => {
              this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
                cb: () => {
                  this.vfjsBus.$emit(VFJS_EVENT_MODEL_UPDATED);
                },
              });
            },
          });
        },
      });
    }
  }
}

export default setVfjsModel;
