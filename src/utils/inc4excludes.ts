import each from './each';

export default (data: object, keys: string[] | object): [object, object] => {
  let caches: any;
  if(Array.isArray(keys)) {
    caches = {};
    keys.forEach((value) => caches[value] = true);
  } else {
    caches = keys as any;
  }
  const list: [object, object] = [{}, {}];
  each(data, (key, value) => {
    const index = key in caches ? 0 : 1;
    list[index][key] = value;
  });
  return list;
};