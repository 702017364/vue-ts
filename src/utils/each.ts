import hasOwnProperty from './hasOwnProperty';

type Callback<K, V> = (
  key: K,
  value: V,
) => void;

type P<T> = keyof T & string;

export default <T extends object>(option: T, callback: Callback<P<T>, T[P<T>]>): void => {
  const hasOwn = hasOwnProperty(option);
  for(const key in option) {
    if(hasOwn(key)) {
      callback(key, option[key]);
    }
  }
};