function vfjsDestroy() {
  this.vfjsEvents.forEach((event) => this.removeVfjsListener(event));
}

export default vfjsDestroy;
