const props = {
  children: {
    type: Array,
    default: () => ([]),
  },
  classNames: {
    type: [String, Array, Object],
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
  vfsBus: {
    type: Object,
    required: true,
  },
  vfsFieldErrors: {
    type: Array,
  },
  vfsFieldOptions: {
    type: Object,
  },
  vfsFieldModel: {
    type: null,
  },
  vfsFieldModelKey: {
    type: String,
    required: true,
  },
  vfsFieldSchema: {
    type: Object,
  },
  vfsFieldState: {
    type: Object,
  },
  vfsFieldUiSchema: {
    type: Object,
  },
  vfsFieldModelValue: {
    type: null,
  },
  vfsModel: {
    type: Object,
    required: true,
  },
  vfsState: {
    type: Object,
  },
};

export default props;
