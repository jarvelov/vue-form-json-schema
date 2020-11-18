function removeVfjsListeners(events = []) {
  events.forEach(this.removeVfjsListener);
}

export default removeVfjsListeners;
