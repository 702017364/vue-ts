import excludeComponent from './excludeComponent';
import each from '@/utils/each';
import { VNodeDirective } from 'vue/types/umd';

interface Cache {
  props: any;
  on: any;
  class?: string | [] | object;
  slotScopeds?: object;
  ref?: string;
  style?: string | object;
  directives?: VNodeDirective[];
}

type ComponentCallbak = (
  cache: Cache,
) => void | Cache;

const RE_EVENT = /^on[A-Z]/;
const classify = (cache: Cache, option: object, isB?: boolean): Cache => {
  each(option, (key, value) => {
    if(isB && (excludeComponent as any)[key]) return;
    if(RE_EVENT.test(key)) {
      if(typeof value === 'function') {
        const newKey = (key as string).slice(2, 3).toLocaleLowerCase() + (key as string).slice(3);
        cache.on[newKey] = value;
      }
    } else {
      if(value !== undefined && value !== null) {
        cache.props[key] = value;
      }
    }
  });
  return cache;
};

export default (option: object, callback: ComponentCallbak): Cache => {
  const { other = {} } = option as any;
  const cache: Cache = {
    props: {},
    on: {},
  };
  classify(cache, option, true);
  callback(cache);
  classify(cache, other);
  return cache;
};