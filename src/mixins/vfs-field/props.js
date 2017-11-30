const props = {
  classNames: {
    type: [String, Array, Object],
  },
  value: {
    type: null,
  },
  vfsFieldModelKey: {
    type: String,
    required: true,
  },
  vfsFieldSchema: {
    type: Object,
    required: true,
  },
  vfsFieldErrors: {
    type: Array,
  },
};

export default props;
