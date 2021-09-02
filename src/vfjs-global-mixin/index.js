import computed from './computed';
import data from './data';
import methods from './methods';
import props from './props';
import watch from './watch';
import {
  VFJS_EXTERNAL_MODEL_PROP,
  VFJS_EXTERNAL_EVENT_CHANGE,
  VFJS_EXTERNAL_EVENT_STATE_CHANGE,
  VFJS_EXTERNAL_EVENT_VALIDATED,
} from '../constants';

const vfjsGlobalMixin = {
  model: {
    prop: VFJS_EXTERNAL_MODEL_PROP,
    event: VFJS_EXTERNAL_EVENT_CHANGE,
  },
  created() {
    this.vfjsInitialize();
  },
  beforeUnmount() {
    this.vfjsDestroy();
  },
  emits: [
    VFJS_EXTERNAL_EVENT_CHANGE,
    VFJS_EXTERNAL_EVENT_STATE_CHANGE,
    VFJS_EXTERNAL_EVENT_VALIDATED,
  ],
  computed,
  data,
  props,
  methods,
  watch,
};

export default vfjsGlobalMixin;
