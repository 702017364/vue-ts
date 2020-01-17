import { ObjectValue } from '@/components/form/type';

const Cache = (cache: ObjectValue<boolean>, key: string): string => {
  if(!key || key in cache) {
    let value = parseInt(key.slice(-1), 10);
    if(isNaN(value)) {
      value = 0;
    } else {
      value++;
    }
    return Cache(cache, key + value);
  } else {
    cache[key] = true;
    return key;
  }
};

type Result = (
  key: string,
) => string;

export default (): Result => {
  const cache = Object.create(null);
  return (key: string) => Cache(cache, key.toLocaleUpperCase());
};