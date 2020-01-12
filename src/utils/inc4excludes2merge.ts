import inc4excludes from './inc4excludes';
import merge from 'lodash/merge';

type Keys = string[] | object;
type formatOptionArg = [ boolean, ...object[] ]
  | [ string[], ...object[] ]
  | [ ...object[] ];

export default (...options: formatOptionArg): object[] => {
  let keys: Keys;
  let cache;
  const [ first ] = options;
  if(typeof first === 'boolean') {
    keys = options?.[1] as Keys || {};
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
};