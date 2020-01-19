import inc4excludes, { Result } from './inc4excludes';
import merge from 'lodash/merge';

function cut<T extends object, K extends string>(first: boolean, keys: K[], ...options: T[]): Result<T, K>;
function cut<T extends object, K extends object>(first: boolean, keys: K, ...options: T[]): Result<T, K>;
function cut<T extends object, K extends string>(first: K[], ...options: T[]): Result<T, K>;
function cut<T extends object, K extends object>(...options: T[]): Result<T, K>;
function cut(...options: any): any {
  let keys: string[] | object;
  let cache: object[];
  const [ first ] = options;
  if(typeof first === 'boolean') {
    keys = options[1] || {};
    cache = options.slice(2);
  } else if(Array.isArray(first)) {
    keys = first;
    cache = options.slice(1);
  } else {
    keys = {};
    cache = options;
  }
  const option = merge({}, ...cache);
  return inc4excludes(option, keys);
}

export default cut;