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
  },
  schemas: {
    type: Object,
    default: () => ({}),
  },
  id: {
    type: String,
    default: () => Math.random().toString(36).substr(2, 9),
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
