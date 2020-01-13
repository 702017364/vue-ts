const keys = 'class|hide|component|other|slots|slotScopeds|ref|directives|style';

export default keys
  .split('|')
  .reduce((cache, key) => {
    (cache as any)[key] = true;
    return cache;
  }, {});