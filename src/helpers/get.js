const get = (obj, path) => {
  if (obj !== null && typeof obj === 'object') {
    const paths = String(path).split('.');
    return paths.reduce((subObj, key) => subObj && subObj[key], obj);
  }

  return null;
};

export default get;
