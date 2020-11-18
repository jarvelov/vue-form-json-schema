function vfjsHelperChildArrayMapper(
  { model, children = [], ...child },
  parentModel,
  index,
) {
  return {
    ...child,
    model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
    children: this.vfjsHelperChildArrayReducerMapper(
      parentModel,
      children,
      index,
    ),
  };
}

export default vfjsHelperChildArrayMapper;
