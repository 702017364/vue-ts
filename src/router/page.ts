export default [
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: 'error' */ '@/pages/error/404.vue'),
    meta: {
      isAuth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ '@/pages/login/index.vue'),
  },
  {
    path: '/',
    name: '首页',
    component: () => import(/* webpackChunkName: 'view' */ '@/pages/home/index.vue'),
  },
];