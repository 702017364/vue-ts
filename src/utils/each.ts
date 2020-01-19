import hasOwnProperty from './hasOwnProperty';

type Callback<T> = (
  key: keyof T & string,
  value: T[keyof T],
) => void;

export default <T extends object>(option: T, callback: Callback<T>): void => {
  const hasOwn = hasOwnProperty(option);
  for(const key in option) {
    if(hasOwn(key)) {
      callback(key, option[key]);
    }
  }
};