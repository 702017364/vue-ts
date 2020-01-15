import mockjs from 'mockjs';

const RE_URL = /\//g;

interface MockResponse {
  url: string;
  type: 'POST' | 'GET';
  body: string;
}

type MockUrlCache<T> = (
  res: MockResponse,
) => T | any;

type MockUrlTemplate<T> = (
  data: T,
) => any | T;

interface MockUrlOption<T> {
  template: MockUrlTemplate<T>;
  parse?: boolean;
  type?: string;
}

export const MockUrl = <T = any>(url: string, { template, parse, type = 'post' }: MockUrlOption<T>) => {
  if(url.slice(0, 1) !== '/') url = '/' + url;
  const value = url.replace(RE_URL, ($0) => '\\' + $0);
  let cache: MockUrlCache<T> | T;
  if(typeof template === 'function') {
    cache = ({ body }: MockResponse) => {
      const data = parse ? (JSON.parse(body) as T) : body;
      return template(data as T);
    };
  } else {
    cache = template;
  }
  mockjs.mock(new RegExp(value), type, cache);
};