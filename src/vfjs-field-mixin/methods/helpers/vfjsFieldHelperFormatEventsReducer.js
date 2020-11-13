function vfjsFieldHelperFormatEventsReducer(events = {}) {
  return Object.keys(events).reduce(
    (formattedEvents, key) => ({
      ...formattedEvents,
      [key]: this.vfjsFieldHelperEventHandler(key, events[key]),
    }),
    {},
  );
}

export default vfjsFieldHelperFormatEventsReducer;
