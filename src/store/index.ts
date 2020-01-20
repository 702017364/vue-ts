import Vue from 'vue';
import Vuex from 'vuex';
import { debug as strict } from '@/const/env';
import * as interfaces from './interfaces';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...interfaces,
  },
  strict,
});
