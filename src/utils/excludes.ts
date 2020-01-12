import inc4excludes from './inc4excludes';

export default (data: object, keys: string[] | object) => {
  return inc4excludes(data, keys)[1];
};