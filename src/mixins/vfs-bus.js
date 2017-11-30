import Vue from 'vue';

const bus = new Vue();

const vfsBusMixin = {
  created() {
    this.vfsBus = bus;
  },
};

export default vfsBusMixin;
