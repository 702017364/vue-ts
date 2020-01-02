import VueRouter, { Route } from 'vue-router';

type T = (
  path: string,
  options?: any,
) => any;

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $t: T;
    $style: any;
  }
}