export default (data: any, keys: string[] | JSON): any[] => {
  let caches: any;
  if(Array.isArray(keys)) {
    caches = Object.create(null);
    keys.forEach((value) => caches[value] = true);
  } else {
    caches = keys as any;
  }
  const list = [
    Object.create(null),
    Object.create(null),
  ];
  for(const key in data) {
    if(data.hasOwnProperty(key)) {
      const index = key in caches ? 0 : 1;
      list[index][key] = data[key];
    }
  }
  return list;
};