const props = {
  components: {
    type: Object,
    default: () => {},
  },
  model: {
    type: Object,
    default: () => {},
  },
  schema: {
    type: Object,
    required: true,
    default: () => [],
  },
  schemaVersion: {
    type: Number,
    default: 7,
  },
  uiSchema: {
    type: Array,
    required: true,
    default: () => {},
  },
};

export default props;
