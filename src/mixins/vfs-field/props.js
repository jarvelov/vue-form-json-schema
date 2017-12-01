const props = {
  classNames: {
    type: [String, Array, Object],
    default: () => [],
  },
  value: {
    type: null,
  },
  vfsBus: {
    type: Object,
    required: true,
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
};

export default props;
