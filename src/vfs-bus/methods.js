const methods = {
  addVfsListener(event) {
    const listener = this.vfsBus.on(event, value =>
      this.vfsBusEventHandler(event, value));

    this.vfsListeners.push(listener);
  },
  addVfsListeners(events = []) {
    events.forEach(this.addVfsListener);
  },
  removeVfsListener(event) {
    this.vfsBus.off(event, this.vfsBusEventHandler);
  },
  removeVfsListeners(events = []) {
    events.forEach(this.removeVfsListener);
  },
  removeVfsListenersAll() {
    this.vfsBus.off();
    this.vfsListeners = [];
  },
};

export default methods;
