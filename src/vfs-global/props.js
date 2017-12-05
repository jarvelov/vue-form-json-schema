const props = {
  components: {
    type: Object,
    default: () => ({}),
  },
  model: {
    type: Object,
    default: () => ({}),
  },
  schema: {
    type: Object,
    required: true,
    default: () => ([]),
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  uiSchema: {
    type: Array,
    required: true,
    default: () => ({}),
  },
};

export default props;
