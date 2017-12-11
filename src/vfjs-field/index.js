import data from './data';
import methods from './methods';
import props from './props';
import vfjsMethodsMixin from '../vfjs-methods';

const vfjsFieldMixin = {
  mixins: [vfjsMethodsMixin],
  data,
  props,
  methods,
};

export default vfjsFieldMixin;
