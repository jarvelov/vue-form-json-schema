function addVfjsListeners(events = [], callback) {
  events.forEach((event) => this.addVfjsListener(event, callback));
}

export default addVfjsListeners;
