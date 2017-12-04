import Minibus from 'minibus';
import methods from './methods';

const vfsBusMixin = {
  created() {
    this.vfsBus = Minibus.create();
  },
  methods,
};

export default vfsBusMixin;
