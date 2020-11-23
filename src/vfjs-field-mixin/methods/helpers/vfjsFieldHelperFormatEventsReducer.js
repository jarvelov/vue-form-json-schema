function vfjsFieldHelperFormatEventsReducer(events = {}) {
  return Object.keys(events).reduce((formattedEvents, key) => {
    const rest = key.substring(1);
    const firstLetter = key[0].toUpperCase();
    const property = `on${firstLetter}${rest}`;

    return {
      ...formattedEvents,
      [property]: this.vfjsFieldHelperEventHandler(key, events[key]),
    };
  }, {});
}

export default vfjsFieldHelperFormatEventsReducer;
