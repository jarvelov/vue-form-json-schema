import { set } from 'lodash';

const helpers = {
  vfjsFieldFormatEvents(events) {
    return Array.isArray(events)
      ? this.vfjsFieldFormatEventsReducer(events)
      : this.vfjsFieldFormatEventsReducer(Object.keys(events));
  },
  vfjsFieldHelperFormatClasses(classes) {
    if (!classes) {
      return {};
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

      if (data instanceof Event && data.target && data.target.value) {
        return this.setVfjsFieldModel(data.target.value);
      }

      return this.setVfjsFieldModel(data);
    };
  },
  vfjsFieldFormatEventsReducer(events) {
    return events.reduce((formattedEvents, key) => (
      set(
        Object.assign({}, formattedEvents),
        this.vfjsFieldHelperFormatEventListenerKey(key),
        this.vfjsFieldHelperEventHandler(key, events[key]),
      )
    ), {});
  },
  vfjsFieldHelperFormatEventListenerKey(key) {
    const keyPrefix = this.prefixes.find(prefix => key.match(prefix));
    if (!keyPrefix) {
      return key;
    }

    const strippedPrefixKey = String(key)
      .replace(keyPrefix, '')
      .toLowerCase();

    return `${keyPrefix}.${strippedPrefixKey}`;
  },
};

export default helpers;
