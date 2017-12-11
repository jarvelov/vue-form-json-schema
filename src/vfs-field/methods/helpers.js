import { set } from 'lodash';

const helpers = {
  vfsFieldFormatEvents(events) {
    return Array.isArray(events)
      ? this.vfsFieldFormatEventsReducer(events)
      : this.vfsFieldFormatEventsReducer(Object.keys(events));
  },
  vfsFieldHelperFormatClasses(classes) {
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
  vfsFieldHelperEventHandler(key, cb) {
    return (data) => {
      if (typeof cb === 'function') {
        return this.setVfsFieldModel(cb(data));
      }

      if (data instanceof Event && data.target && data.target.value) {
        return this.setVfsFieldModel(data.target.value);
      }

      return this.setVfsFieldModel(data);
    };
  },
  vfsFieldFormatEventsReducer(events) {
    return events.reduce((formattedEvents, key) => (
      set(
        Object.assign({}, formattedEvents),
        this.vfsFieldHelperFormatEventListenerKey(key),
        this.vfsFieldHelperEventHandler(key, events[key]),
      )
    ), {});
  },
  vfsFieldHelperFormatEventListenerKey(key) {
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
