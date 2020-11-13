function vfjsFieldHelperInternalModelEnabledForEvent(key) {
  if (this.vfjsFieldInternalModel) {
    if (Array.isArray(this.vfjsFieldInternalModel)) {
      return this.vfjsFieldInternalModel.indexOf(key) >= 0;
    }

    return this.vfjsFieldInternalModel === true;
  }

  return false;
}

export default vfjsFieldHelperInternalModelEnabledForEvent;
