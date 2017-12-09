import { set } from 'lodash';

const methods = {
  vfsFieldGetAttributes(options) {
    if (!options) {
      return {};
    }
    const attributes = {};

    if (options.attrs) {
      attributes.attrs = options.attrs;
    }

    if (options.class) {
      attributes.class = options.class;
    }

    if (options.domProps) {
      attributes.domProps = options.domProps;
    }

    if (options.key) {
      attributes.key = options.key;
    }

    if (options.props) {
      attributes.props = options.props;
    }

    if (options.ref) {
      attributes.ref = options.ref;
    }

    if (options.style) {
      attributes.style = options.style;
    }

    return attributes;
  },
  vfsFieldEventHandler(key, cb) {
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
