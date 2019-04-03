const props = {
  vfjsBus: {
    type: Object,
    required: true,
  },
  vfjsChildren: {
    type: Array,
    default: () => [],
  },
  vfjsChildrenUiSchema: {
    type: Array,
    default: () => [],
  },
  vfjsComponent: {
    type: [String, Object, Function],
  },
  vfjsFieldErrorHandler: {
    type: Boolean,
  },
  vfjsFieldErrorOptions: {
    type: Object,
  },
  vfjsFieldErrors: {
    type: Array,
  },
  vfjsFieldId: {
    type: String,
    required: true,
  },
  vfjsFieldModel: {
    type: null,
  },
  vfjsFieldModelKey: {
    type: [String, Boolean],
    required: true,
  },
  vfjsFieldOptions: {
    type: Object,
    required: true,
  },
  vfjsFieldRequired: {
    type: Boolean,
    required: true,
  },
  vfjsFieldSchema: {
    type: Object,
    required: true,
  },
  vfjsFieldSchemas: {
    type: Object,
  },
  vfjsFieldState: {
    type: Object,
    required: true,
  },
  vfjsFieldTag: {
    type: String,
    default: 'div',
  },
  vfjsFieldUiSchema: {
    type: Object,
    required: true,
  },
  vfjsFieldValueProp: {
    type: String,
  },
  vfjsOptions: {
    type: Object,
    required: true,
  },
  vfjsModel: {
    type: Object,
    required: true,
  },
  vfjsState: {
    type: Object,
    required: true,
  },
};

export default props;
