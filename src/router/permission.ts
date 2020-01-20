import { NavigationGuard } from 'vue-router';
import whiteList from './whiteList';
import { ObjectValue } from '@/components/form/type';
import store from '@/store';
import { AUTH as ACTION } from '@/api';
import { AUTH } from '@/store/types';

const whiteOption = whiteList.reduce((cache, value) => {
  cache[value] = true;
  return cache;
}, {} as ObjectValue<true>);

export default (async (to, from, next) => {
  if(whiteOption[to.path]) {
    next();
  } else {
    if(from.path === '/login' && store.getters[AUTH.GET]) {
      next();
    } else {
      if(await store.dispatch(ACTION)) {
        next();
      } else {
        next('/login');
      }
    }
  }
}) as NavigationGuard;