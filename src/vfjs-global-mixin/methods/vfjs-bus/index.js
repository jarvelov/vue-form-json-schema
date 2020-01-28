import Vue from 'vue';
import vfjsBusEventActions from './actions';

const vfjsBus = {
  addVfjsListener(event, callback) {
    this.vfjsBus.$on(event, (value) => callback(event, value));
  },
  addVfjsListeners(events = [], callback) {
    events.forEach((event) => this.addVfjsListener(event, callback));
  },
  removeVfjsListener(event) {
    this.vfjsBus.$off(event);
  },
  removeVfjsListeners(events = []) {
    events.forEach(this.removeVfjsListener);
  },
  removeVfjsListenersAll() {
    this.vfjsBus.$off();
  },
  vfjsBusInitialize() {
    this.vfjsBus = new Vue();
  },
  vfjsBusEventHandler(event, payload) {
    if (event && event in vfjsBusEventActions) {
      vfjsBusEventActions[event].call(this, payload);
    }
  },
};

export default vfjsBus;
