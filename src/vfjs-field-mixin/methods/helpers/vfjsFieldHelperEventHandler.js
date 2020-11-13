function vfjsFieldHelperEventHandler(key, cb) {
  return (...args) => {
    const [event] = args;
    let value = event;

    if (typeof cb === 'function') {
      value = cb(...args);
    } else if (event instanceof Event) {
      if (
        event.target &&
        typeof event.target[this.vfjsFieldEventProp] !== 'undefined'
      ) {
        value = event.target[this.vfjsFieldEventProp];
      }
    }

    if (this.vfjsFieldHelperInternalModelEnabledForEvent(key)) {
      // Set internal value so that on next re-render the new value will be updated
      this.vfjsInternalModel = value;
    }

    return this.setVfjsFieldModel(value);
  };
}

export default vfjsFieldHelperEventHandler;
