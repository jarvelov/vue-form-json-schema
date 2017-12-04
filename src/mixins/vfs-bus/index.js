import Vue from 'vue';
import methods from './methods';

const bus = new Vue();
const vfsBusMixin = {
  created() {
    this.vfsBus = bus;
  },
  methods,
};

export default vfsBusMixin;
