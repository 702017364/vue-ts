export default [
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: 'error' */ '@/pages/error-404.vue'),
    meta: {
      isAuth: false,
    },
  },
  {
    path: '/',
    name: '首页',
    component: () => import('@/pages/home.vue'),
  },
];