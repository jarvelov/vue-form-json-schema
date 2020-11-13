import { VFJS_EVENT_UI_FIELDS_UPDATE } from '../../../constants';

function vfjsFieldHelperStateEventHandler(event) {
  if (event && event.type === 'blur') {
    const initialBlur = this.vfjsFieldState.vfjsFieldBlur;
    this.setVfjsFieldState({
      ...this.vfjsFieldState,
      vfjsFieldBlur: true,
    });

    if (!initialBlur) {
      this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);
    }
  }
}

export default vfjsFieldHelperStateEventHandler;
