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
  vfjsFieldOptions: {
    type: Object,
    required: true,
  },
  vfjsFieldModel: {
    type: Object,
  },
  vfjsFieldModelKey: {
    type: String,
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
  vfjsFieldUiSchema: {
    type: Object,
    required: true,
  },
  vfjsFieldModelValue: {
    type: null,
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
