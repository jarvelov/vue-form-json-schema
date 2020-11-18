class VfjsBus {
  constructor() {
    this.events = {};
  }

  $on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  $off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (eventCallback) => eventCallback === callback,
      );
    }
  }

  $emit(eventName, value) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(value));
    }
  }
}

export default VfjsBus;
