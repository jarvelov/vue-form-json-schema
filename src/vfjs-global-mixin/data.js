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
    ajv: {
      keywords: {},
      locale: null,
      options: {
        allErrors: true,
      },
    },
    allowInvalidModel: true,
    castToSchemaType: false,
    componentProperties: {
      attrs: {
        // Components which support the 'checked' attribute
        checked: ['checkbox', 'radio'],
        // Components which support the 'required' attribute
        required: ['input', 'select', 'textarea'],
        // Components which support the 'value' attribute
        value: ['input', 'option', 'textarea'],
      },
      domProps: {
        // Components which should have its DOM property 'checked' updated
        checked: ['checkbox', 'radio'],
        // Components which should have its DOM property 'required' updated
        required: ['input', 'select', 'textarea'],
        // Components which should have its DOM property 'value' updated
        value: ['input', 'textarea'],
      },
      props: {
        // Components which support the 'required' prop
        required: [],
      },
      // Components which has their value within the tags
      innerHTML: ['textarea'],
    },
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
