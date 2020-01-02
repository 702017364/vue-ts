const re = /-(\w)/g;

export default (value: string, firstHump: boolean = true) => {
  let hump = value.replace(re, ($0, $1) => $1.toLocaleUpperCase());
  if(firstHump && hump) {
    hump = hump.slice(0, 1).toLocaleUpperCase() + hump.slice(1);
  }
  return hump;
};