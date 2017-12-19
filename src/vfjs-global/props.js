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
    default: () => ({}),
    default: () => ([]),
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  tag: {
    type: String,
    default: 'div',
  },
  uiSchema: {
    type: Array,
    required: true,
    default: () => ({}),
  },
};

export default props;
