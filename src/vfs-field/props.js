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
    required: true,
  },
  value: {
    type: null,
  },
  vfsBus: {
    type: Object,
    required: true,
  },
  vfsModel: {
    type: Object,
    required: true,
  },
  vfsFieldModel: {
    type: Object,
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
};

export default props;
