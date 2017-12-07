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
  vfsFieldErrors: {
    type: Array,
  },
  vfsFieldUiSchema: {
    type: Object,
  },
  vfsModel: {
    type: Object,
    required: true,
  },
  vfsFieldState: {
    type: Object,
  },
  vfsState: {
    type: Object,
  },
};

export default props;
