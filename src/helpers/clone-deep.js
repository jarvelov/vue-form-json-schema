const cloneDeep = (obj) => {
  if (obj !== null && typeof obj === 'object') {
    if (obj && obj.constructor && obj.constructor.name === 'Date') {
      return new Date(obj.getTime());
    }

    if (Array.isArray(obj)) {
      return obj.reduce((newArray, value) => [...newArray, cloneDeep(value)], []);
    }

    return Object.keys(obj).reduce(
      (newObj, key) => ({
        ...newObj,
        [key]: cloneDeep(obj[key]),
      }),
      {},
    );
  }

  return obj;
};

export default cloneDeep;
