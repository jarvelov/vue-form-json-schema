const props = {
  children: {
    type: Array,
    default: () => ([]),
  },
  model: {
    type: String,
    required: true,
  },
  schema: {
    type: Object,
  },
  state: {
    type: Object,
  },
  value: {
    type: null,
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
  },
  vfjsFieldModel: {
    type: null,
  },
  vfjsFieldModelKey: {
    type: String,
    required: true,
  },
  vfjsFieldSchema: {
    type: Object,
  },
  vfjsFieldState: {
    type: Object,
  },
  vfjsFieldUiSchema: {
    type: Object,
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
  },
};

export default props;
