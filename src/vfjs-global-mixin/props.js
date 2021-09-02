import {
  VFJS_EXTERNAL_COMPONENTS_PROP,
  VFJS_EXTERNAL_ID_PROP,
  VFJS_EXTERNAL_MODEL_PROP,
  VFJS_EXTERNAL_OPTIONS_PROP,
  VFJS_EXTERNAL_SCHEMA_PROP,
  VFJS_EXTERNAL_SCHEMAS_PROP,
  VFJS_EXTERNAL_TAG_PROP,
  VFJS_EXTERNAL_UI_SCHEMA_PROP,
} from '../constants';

const props = {
  [VFJS_EXTERNAL_COMPONENTS_PROP]: {
    type: Object,
    default: () => ({}),
  },
  [VFJS_EXTERNAL_MODEL_PROP]: {
    type: Object,
    default: () => ({}),
  },
  [VFJS_EXTERNAL_SCHEMA_PROP]: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  [VFJS_EXTERNAL_SCHEMAS_PROP]: {
    type: Object,
    default: () => ({}),
  },
  [VFJS_EXTERNAL_ID_PROP]: {
    type: String,
    default: () => Math.random().toString(36).substr(2, 9),
  },
  [VFJS_EXTERNAL_OPTIONS_PROP]: {
    type: Object,
    default: () => ({}),
  },
  [VFJS_EXTERNAL_TAG_PROP]: {
    type: String,
    default: 'div',
  },
  [VFJS_EXTERNAL_UI_SCHEMA_PROP]: {
    type: Array,
    required: true,
    default: () => ({}),
  },
};

export default props;
