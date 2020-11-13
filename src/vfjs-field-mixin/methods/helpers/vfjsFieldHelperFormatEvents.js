function vfjsFieldHelperFormatEvents(events) {
  if (!events) {
    return {};
  }

  let eventsObj = events;

  if (Array.isArray(events)) {
    eventsObj = events.reduce((obj, event) => ({ ...obj, [event]: true }), {});
  } else if (typeof events === 'string') {
    eventsObj = { [events]: true };
  }

  return this.vfjsFieldHelperFormatEventsReducer(eventsObj);
}

export default vfjsFieldHelperFormatEvents;
