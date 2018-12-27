import {
  VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
  VFJS_EVENT_FIELD_MODEL_UPDATE,
  VFJS_EVENT_FIELD_MODEL_VALIDATE,
  VFJS_EVENT_FIELD_STATE_UPDATE,
  VFJS_EVENT_MODEL_UPDATE,
  VFJS_EVENT_MODEL_UPDATED,
  VFJS_EVENT_MODEL_VALIDATE,
  VFJS_EVENT_STATE_UPDATE,
  VFJS_EVENT_STATE_UPDATED,
  VFJS_EVENT_UI_FIELDS_UPDATE,
} from '../constants';

const data = () => ({
  vfjsBus: {},
  vfjsEvents: [
    VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
    VFJS_EVENT_FIELD_MODEL_UPDATE,
    VFJS_EVENT_FIELD_MODEL_VALIDATE,
    VFJS_EVENT_FIELD_STATE_UPDATE,
    VFJS_EVENT_MODEL_UPDATE,
    VFJS_EVENT_MODEL_UPDATED,
    VFJS_EVENT_MODEL_VALIDATE,
    VFJS_EVENT_STATE_UPDATE,
    VFJS_EVENT_STATE_UPDATED,
    VFJS_EVENT_UI_FIELDS_UPDATE,
  ],
  vfjsFields: [],
  vfjsFieldsActive: [],
  vfjsFieldsRequired: [],
  vfjsModel: {},
  vfjsOptions: {
    allowInvalidModel: true,
    ajv: {
      keywords: {},
      locale: null,
      options: {
        allErrors: true,
      },
    },
    castToSchemaType: false,
    showValidationErrors: false,
    validate: true,
    validateOnLoad: true,
    validateOnChange: true,
    valueProp: 'value',
  },
  vfjsSchema: {},
  vfjsState: {},
  vfjsUiSchema: [],
});

export default data;
