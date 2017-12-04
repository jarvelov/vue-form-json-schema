const methods = {
  addVfsListener(event, callback) {
    const listener = this.vfsBus.on(event, value => callback(event, value));
    this.vfsListeners.push(listener);
  },
  addVfsListeners(events = [], callback) {
    events.forEach(this.addVfsListener, callback);
  },
  removeVfsListener(event) {
    this.vfsBus.off(event);
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
