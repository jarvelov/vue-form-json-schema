function vfjsFieldHelperAddListener(el, event) {
  el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
}

export default vfjsFieldHelperAddListener;
