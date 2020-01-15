declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.scss' {
  const scss: any;
  export default scss;
}

declare module '*.json' {
  const value: any;
  export default value;
}