export function findValues(obj, path) {
  const keys = path.split('.');
  let values = [];

  function traverse(o, keys) {
    if (keys.length === 0) {
      values.push(o);
    } else {
      const key = keys.shift();
      if (o.hasOwnProperty(key)) {
        traverse(o[key], keys);
      }
    }
  }

  traverse(obj, keys);

  return values;
}
