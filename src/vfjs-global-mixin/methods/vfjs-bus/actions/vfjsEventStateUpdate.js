function vfjsEventStateUpdate({ value, cb }) {
  this.setVfjsState(value);

  if (cb && typeof cb === 'function') {
    cb();
  }
}

export default vfjsEventStateUpdate;
