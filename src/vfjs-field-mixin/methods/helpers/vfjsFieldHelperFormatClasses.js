function vfjsFieldHelperFormatClasses(classes) {
  if (!classes) {
    return {};
  }

  if (typeof classes === 'string') {
    return {
      [classes]: true,
    };
  }

  if (Array.isArray(classes)) {
    return classes.reduce(
      (classesObj, key) => ({
        ...classesObj,
        [key]: true,
      }),
      {},
    );
  }

  if (typeof classes === 'string') {
    if (classes.indexOf(',') !== -1) {
      return classes.split(',');
    }

    if (classes.indexOf(' ') !== -1) {
      return classes.split(' ');
    }
  }

  return classes;
}

export default vfjsFieldHelperFormatClasses;
