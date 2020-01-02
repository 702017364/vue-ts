export default (data: any, keys: string[]) => {
  const includes = Object.create(null);
  keys.forEach((key) => {
    if(key in data) {
      includes[key] = data[key];
    }
  });
  return includes;
};