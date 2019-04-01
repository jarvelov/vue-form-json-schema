const set = (obj, path, value) => {
  if (typeof path === 'number') {
    path = [path];
  }

  if (!path || path.length === 0) {
    return obj;
  }

  if (typeof path === 'string') {
    return set(obj, path.split('.'), value);
  }

  const key = path[0];
  const currentValue = obj[key];
  if (path.length === 1) {
    obj[key] = value;
    return obj;
  }

  if (typeof currentValue === 'undefined') {
    if (!Number.isNaN(path[1])) {
      obj[key] = [];
    } else {
      obj[key] = {};
    }
  }

  return set(obj[key], path.slice(1), value);
};

export default set;
