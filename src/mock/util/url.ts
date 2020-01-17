import mockjs from 'mockjs';

const RE_URL = /\//g;

interface Response {
  url: string;
  type: 'POST' | 'GET';
  body: string;
}

type Cache<T> = (
  res: Response,
) => T | any;

type Template<T, U> = (
  data: T,
) => U | T;

interface Option<T, U> {
  template: Template<T, U>;
  parse?: boolean;
  type?: string;
}

export default <T = any, U = any>(url: string, { template, parse, type = 'post' }: Option<T, U>): void => {
  if(url.slice(0, 1) !== '/') url = '/' + url;
  const value = url.replace(RE_URL, ($0) => '\\' + $0);
  let cache: Cache<T> | T;
  if(typeof template === 'function') {
    cache = ({ body }: Response) => {
      const data = parse ? (JSON.parse(body) as T) : body;
      return template(data as T);
    };
  } else {
    cache = template;
  }
  mockjs.mock(new RegExp(value), type, cache);
};