import Vue from 'vue';
import Vuex from 'vuex';
import { debug as strict } from '@/const/env';
import isLogin from './modules/isLogin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    isLogin,
  },
  strict,
});
