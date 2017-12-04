import Vue from 'vue';
import methods from './methods';

const vfsBusMixin = {
  created() {
    this.vfsBus = new Vue();
  },
  methods,
};

export default vfsBusMixin;
