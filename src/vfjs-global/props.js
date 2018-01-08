const props = {
  model: {
    type: Object,
    default: () => ({}),
  },
  schema: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  schemas: {
    type: Object,
    default: () => ({}),
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
