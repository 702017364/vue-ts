import Vue from 'vue';
import VueRouter from 'vue-router';
import pageRouter from './page';

Vue.use(VueRouter);

const routes = [...pageRouter];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
