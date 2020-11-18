import { isEqual } from 'lodash';
import { VFJS_EVENT_FIELD_MODELS_VALIDATE } from '../../../../constants';

function vfjsEventModelValidate({ vfjsModel, cb }) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODELS_VALIDATE, {
    vfjsModel,
    cb: (vfjsFieldStates) => {
      const vfjsErrors = this.getVfjsValidationErrors(vfjsModel);
      const vfjsFieldErrors = Object.keys(vfjsFieldStates)
        .map((key) => vfjsFieldStates[key])
        .reduce(
          (errors, vfjsFieldState) => [
            ...errors,
            ...vfjsFieldState.vfjsFieldErrors,
          ],
          [],
        );

      const vfjsErrorsFiltered = [...vfjsErrors, ...vfjsFieldErrors].reduce(
        (array, item) => {
          const exists = array.some((arrayItem) => isEqual(item, arrayItem));
          if (!exists) {
            array.push(item);
          }

          return array;
        },
        [],
      );

      const vfjsState = {
        ...this.getVfjsState(),
        ...vfjsFieldStates,
        vfjsErrors: vfjsErrorsFiltered,
      };

      if (cb && typeof cb === 'function') {
        cb(vfjsState);
      }
    },
  });
}

export default vfjsEventModelValidate;
