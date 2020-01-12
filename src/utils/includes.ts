import hasOwnProperty from './hasOwnProperty';

type Keyof<T> = keyof T & string;

type Limit<T> = Keyof<T> | string;

export default <T extends object, V extends Limit<T>>(data: T, keys: V[]): T => {
  const includes = {} as T;
  const hasOwn = hasOwnProperty(data);
  const hasKey = <K extends Keyof<T>>(key: string): key is K => hasOwn(key);
  keys.forEach((key) => {
    if(hasKey(key)) {
      includes[key] = data[key];
    }
  });
  return includes;
};