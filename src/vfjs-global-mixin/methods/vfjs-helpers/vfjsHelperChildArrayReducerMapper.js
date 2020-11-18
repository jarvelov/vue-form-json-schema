function vfjsHelperChildArrayReducerMapper(model, children = [], index) {
  return children.reduce(
    (allChildren, child) => [
      ...allChildren,
      this.vfjsHelperChildArrayMapper(child, model, index),
    ],
    [],
  );
}

export default vfjsHelperChildArrayReducerMapper;
