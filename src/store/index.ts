import Vue from 'vue';
import Vuex from 'vuex';
import { debug as strict } from '@/const/env';
import isLogin from './modules/isLogin';
import userInfo from './modules/userInfo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    isLogin,
    userInfo,
  },
  strict,
});
