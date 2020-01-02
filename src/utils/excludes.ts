import inc4excludes from './inc4excludes';

export default (data: any, keys: string[] | JSON) => {
  return inc4excludes(data, keys)[1];
};