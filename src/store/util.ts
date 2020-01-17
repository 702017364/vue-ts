import { default as Cache } from '@/utils/cache';

type Already<T> = 'STATE' | 'GET' | 'MUTATION' | 'ACTION'| T;

type Other<T extends string> = {
  [P in T]: string;
};

type Type<T extends string> = {
  readonly [P in T]: string;
};

const cache = Cache();
const alreadys = 'STATE|GET|MUTATION|ACTION'.split('|').reduce((obj, key) => {
  obj[key] = true;
  return obj;
}, Object.create(null));

function type(value: string, list?: []): Type<Already<never>>;
function type<T extends string>(value: string, list?: T[]): Type<Already<T>>;
function type<T extends string>(value: string, list?: T[]): Type<Already<T>> {
  const val = cache(value);
  const other = (list || []).reduce((option, key) => {
    if(key in alreadys) return option;
    Object.defineProperty(option, key, {
      get() {
        return `${key}_${val}`;
      },
    });
    return option;
  }, {} as Other<T>);

  return {
    STATE: val,
    get GET() {
      return `GET_${val}`;
    },
    get MUTATION() {
      return `MUTATION_${val}`;
    },
    get ACTION() {
      return `ACTION_${val}`;
    },
    ...other,
  };
}

export { type };