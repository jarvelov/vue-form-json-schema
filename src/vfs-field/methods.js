import { set } from 'lodash';

const methods = {
  vfsFieldEventHandler(key, cb) {
    return (data) => {
      if (typeof cb === 'function') {
        this.setVfsFieldModel(cb(data));
      } else {
        this.setVfsFieldModel(data);
      }
    };
  },
  vfsFieldFormatEventsReducer(events) {
    return events.reduce((formattedEvents, key) => (
      set(
        Object.assign({}, formattedEvents),
        this.vfsFieldFormatEventListenerKey(key),
        this.vfsFieldEventHandler(key, this.events[key]),
      )
    ), {});
  },
  vfsFieldFormatEvents(events) {
    return Array.isArray(this.events)
      ? this.vfsFieldFormatEventsReducer(this.events)
      : this.vfsFieldFormatEventsReducer(Object.keys(this.events));
  },
  vfsFieldFormatEventListenerKey(key) {
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

export default methods;
