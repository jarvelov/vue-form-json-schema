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
  },
  vfsFieldErrors: {
    type: Array,
  },
};

export default props;
