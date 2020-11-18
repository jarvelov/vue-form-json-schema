import { get } from 'lodash';
import { VFJS_EVENT_FIELD_MODEL_VALIDATE } from '../../../../constants';

function vfjsEventFieldModelsValidate({ vfjsModel, cb }) {
  const operations = this.vfjsFieldsActiveModels.map((key) => {
    const vfjsFieldModel = get(vfjsModel, key);

    return new Promise((resolve) => {
      this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
        value: vfjsFieldModel,
        key,
        cb: (errors) => {
          const vfjsFieldState = this.getVfjsFieldState(key);

          resolve({
            [key]: {
              ...vfjsFieldState,
              vfjsFieldErrors: errors,
            },
          });
        },
      });
    });
  });

  Promise.all(operations).then((results) => {
    const newVfjsState = results.reduce(
      (vfjsState, vfjsFieldState) => ({
        ...vfjsState,
        ...vfjsFieldState,
      }),
      {},
    );

    if (cb && typeof cb === 'function') {
      cb(newVfjsState);
    }
  });
}

export default vfjsEventFieldModelsValidate;
