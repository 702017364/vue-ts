import excludeComponent from './excludeComponent';
import each from '@/utils/each';
import { JSXOption, ComponentOption, ObjectValue } from '../form/type';
import { getProps } from '../form/options';
import { hump } from '@/utils';

type ComponentCallbak = (
  cache: JSXOption,
) => void | JSXOption;

type GlobalProps = ObjectValue | null;

const RE_EVENT = /^on[A-Z]/;
const classify = (cache: JSXOption, option: object, diff: GlobalProps, isB?: boolean): JSXOption => {
  each(option, (key, value) => {
    if(isB && (excludeComponent as any)[key]) return;
    if(RE_EVENT.test(key)) {
      if(typeof value === 'function') {
        const newKey = (key as string).slice(2, 3).toLocaleLowerCase() + (key as string).slice(3);
        cache.on[newKey] = value;
      }
    } else {
      if(value === undefined || value === null) return;
      const keyHump = hump(key);
      const t = (diff === null || keyHump in diff) ? 'props' : 'attrs';
      cache[t][key] = value;
    }
  });
  return cache;
};

export default (option: ComponentOption, callback: ComponentCallbak): JSXOption => {
  const { component, other = {} } = option;
  const diff: GlobalProps = typeof component === 'string'
    ? getProps(component)
    : null;
  const cache: JSXOption = {
    attrs: {},
    props: {},
    on: {},
  };
  classify(cache, option, diff, true);
  callback(cache);
  classify(cache, other, diff);
  return cache;
};