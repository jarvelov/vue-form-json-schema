const helpers = {
  vfjsFieldFormatEvents(events) {
  vfjsFieldHelperAddListener(el, event) {
    el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
  vfjsFieldHelperRemoveListener(el, event) {
    el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
  },
    if (!events) {
      return {};
    }

    return Array.isArray(events)
      ? this.vfjsFieldFormatEventsReducer(events)
      : this.vfjsFieldFormatEventsReducer(Object.keys(events));
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
  vfjsFieldFormatEventsReducer(events) {
    return events.reduce((formattedEvents, key) => ({
      ...formattedEvents,
      [key]: this.vfjsFieldHelperEventHandler(key, events[key]),
    }), {});
  },
};

export default helpers;
