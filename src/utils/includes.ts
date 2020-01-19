import inc4excludes, { ResultInclude as Result } from './inc4excludes';

function include<T extends object, K extends string>(data: T, keys: K[]): Result<T, K>;
function include<T extends object, K extends object>(data: T, keys: K): Result<T, K>;
function include(data: object, keys: any): any {
  return inc4excludes(data, keys)[0];
}

export default include;