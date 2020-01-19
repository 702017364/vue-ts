import inc4excludes, { ResultExclude as Result } from './inc4excludes';

function exclude<T extends object, K extends string>(data: T, keys: K[]): Result<T, K>;
function exclude<T extends object, K extends object>(data: T, keys: K): Result<T, K>;
function exclude(data: object, keys: any): any {
  return inc4excludes(data, keys)[1];
}

export default exclude;