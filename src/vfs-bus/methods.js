const methods = {
  addVfsListener(event) {
    this.vfsBus.$on(event, value => this.vfsBusEventHandler(event, value));
  },
  addVfsListeners(events = []) {
    events.forEach(this.addVfsListener);
  },
  removeVfsListener(event) {
    this.vfsBus.$off(event, this.vfsBusEventHandler);
  },
  removeVfsListeners(events = []) {
    events.forEach(this.removeVfsListener);
  },
  removeVfsListenersAll() {
    this.vfsBus.$off();
  },
};

export default methods;
