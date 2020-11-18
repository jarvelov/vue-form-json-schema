function vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
  const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);

  if (relativeModel) {
    return `${parentModel}.${index}.${relativeModel}`;
  }

  return model;
}

export default vfjsHelperGetChildArrayModelAtIndex;
