type Option = undefined | null | object;
type Callback = (
  key: string,
) => boolean;

export default (option: Option): Callback => {
  const believe = option !== void 0 && option !== null;
  const proto = believe ? Object.getPrototypeOf(option) : null;
  return (key: string): boolean => {
    return proto === null || (option as object).hasOwnProperty(key);
  };
};