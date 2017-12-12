const props = {
  children: {
    type: Array,
    default: () => ([]),
  },
  id: {
    type: String,
    required: true,
  },
  model: {
    type: null,
  },
  modelKey: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
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
    type: null,
  },
  vfjsFieldModelKey: {
    type: String,
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
  vfjsFieldUuid: {
    type: String,
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
