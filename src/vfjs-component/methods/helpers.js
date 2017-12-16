const helpers = {
  vfjsFieldHelperAddListener(el, event) {
    el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperRemoveListener(el, event) {
    el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperStateEventHandler(event) {
    if (event) {
      if (event.type === 'blur') {
        this.setVfjsFieldState({
          $touched: true,
        });
      }
    }
  },
  vfjsFieldHelperFormatEvents(events) {
    if (!events) {
      return {};
    }

    const eventsObj = Array.isArray(events)
      ? events.reduce((obj, event) => ({ ...obj, [event]: true }), {})
      : events;

    return this.vfjsFieldHelperFormatEventsReducer(eventsObj);
  },
  vfjsFieldHelperFormatClasses(classes) {
    if (!classes) {
      return {};
    }

    if (typeof classes === 'string') {
      return {
        [classes]: true,
      };
    }

    return Array.isArray(classes)
      ? classes.reduce((classesObj, key) => ({
        ...classesObj,
        [key]: true,
      }), {})
      : classes;
  },
  vfjsFieldHelperEventHandler(key, cb) {
    return (data) => {
      if (typeof cb === 'function') {
        return this.setVfjsFieldModel(cb(data));
      }

      if (data instanceof Event) {
        if (data.target && data.target.value) {
          return this.setVfjsFieldModel(data.target.value);
        }

        return this.setVfjsFieldModel(undefined);
      }

      return this.setVfjsFieldModel(data);
    };
  },
  vfjsFieldHelperFormatEventsReducer(events = {}) {
    return Object.keys(events).reduce((formattedEvents, key) => ({
      ...formattedEvents,
      [key]: this.vfjsFieldHelperEventHandler(key, events[key]),
    }), {});
  },
};

export default helpers;
