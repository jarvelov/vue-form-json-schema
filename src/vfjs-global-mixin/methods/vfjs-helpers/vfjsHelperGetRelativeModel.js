function vfjsHelperGetRelativeModel(model, parentModel) {
  if (model) {
    return String(model).substr(parentModel.length + 1);
  }

  return model;
}

export default vfjsHelperGetRelativeModel;
