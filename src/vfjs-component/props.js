const props = {
  children: {
    type: Array,
    default: () => ([]),
  },
  model: {
    type: Object,
    required: true,
  },
  modelKey: {
    type: String,
    required: true,
  },
  schema: {
    type: Object,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
  tag: {
    type: String,
    default: 'div',
  },
  value: {
    type: null,
  },
  uiSchema: {
    type: Object,
    required: true,
  },
  vfjsBus: {
    type: Object,
    required: true,
  },
  vfjsFieldErrors: {
    type: Array,
  },
  vfjsFieldModel: {
    type: Object,
  },
  vfjsFieldModelKey: {
    type: String,
    required: true,
  },
  vfjsFieldModelValue: {
    type: null,
  },
  vfjsFieldOptions: {
    type: Object,
    required: true,
  },
  vfjsFieldSchema: {
    type: Object,
    required: true,
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
