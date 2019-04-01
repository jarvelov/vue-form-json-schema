const isEqual = (a, b) => {
  if (a !== null && b !== null) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return a === b;
};

export default isEqual;
