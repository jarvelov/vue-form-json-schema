import {
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
} from '../../../../constants';

function setVfjsUiFieldsActive() {
  this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
  this.vfjsFieldsActiveModels = this.getVfjsFieldsModels(this.vfjsFieldsActive);

  if (this.vfjsOptions.validate) {
    const vfjsModel = this.getVfjsModel();

    this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel,
      cb: (vfjsState) => {
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
          value: vfjsState,
          cb: () => {
            this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
              cb: () => {
                this.setVfjsFields();
              },
            });
          },
        });
      },
    });
  } else {
    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
      cb: () => {
        this.setVfjsFields();
      },
    });
  }
}

export default setVfjsUiFieldsActive;
