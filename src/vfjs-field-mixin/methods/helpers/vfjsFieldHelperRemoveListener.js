function vfjsFieldHelperRemoveListener(el, event) {
  el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
}

export default vfjsFieldHelperRemoveListener;
