function addVfjsListener(event, callback) {
  this.vfjsBus.$on(event, (value) => callback(event, value));
}

export default addVfjsListener;
