const isObject = obj => obj !== null && obj && obj.constructor && obj.constructor.name === 'Object';

const merge = (target, ...sources) => {
  if (!sources || (sources && sources.length === 0)) {
    return target;
  }

  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(target[key]) && isObject(source[key])) {
        merge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  } else if (Array.isArray(source)) {
    const newTarget = Array.isArray(target) ? [...target] : [];
    for (let i = 0; i < source.length; i++) {
      if (typeof target[i] === 'undefined') {
        newTarget[i] = source[i];
      } else if (
        (isObject(target[i]) || Array.isArray(target[i]))
        && (isObject(source[i]) || Array.isArray(source[i]))
      ) {
        newTarget[i] = merge(target[i], source[i]);
      } else {
        newTarget[i] = source[i];
      }
    }

    return merge(newTarget, ...sources);
  }

  return merge(target, ...sources);
};

export default merge;
