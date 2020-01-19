import each from './each';
import { ObjectValue } from '@/components/form/type';

type ToKey<T> = T extends object ? keyof T : T;
export type ResultInclude<T, K> = {
  [P in Extract<keyof T, ToKey<K>>]: T[keyof T];
};
export type ResultExclude<T, K> = {
  [P in Exclude<keyof T, ToKey<K>>]: T[keyof T];
};
export type Result<T, K> = [
  ResultInclude<T, K>,
  ResultExclude<T, K>,
];

function cut<T extends object, K extends string>(data: T, keys: K[]): Result<T, K>;
function cut<T extends object, K extends object>(data: T, keys: K): Result<T, K>;
function cut(data: object, keys: any): any {
  let caches: ObjectValue;
  if(Array.isArray(keys)) {
    caches = {};
    keys.forEach((value) => caches[value] = true);
  } else {
    caches = keys;
  }
  const list: [ObjectValue, ObjectValue] = [{}, {}];
  each(data, (key, value) => {
    const index = key in caches ? 0 : 1;
    list[index][key] = value;
  });
  return list;
}

export default cut;