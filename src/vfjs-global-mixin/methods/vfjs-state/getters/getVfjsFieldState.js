function getVfjsFieldState(key) {
  if (key) {
    return this.getVfjsState(key);
  }

  return this.vfjsFieldModelKey
    ? this.getVfjsState(this.vfjsFieldModelKey)
    : null;
}

export default getVfjsFieldState;
