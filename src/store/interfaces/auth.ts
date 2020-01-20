import { Module, ActionContext } from 'vuex';
import { AUTH } from '@/store/types';
import { AUTH as api } from '@/api';
import axios from '@/axios';

const STATE = 'auth';

interface State {
  [STATE]: boolean;
}

export default {
  state: {
    [STATE]: false,
  },
  getters: {
    [AUTH.GET](state: State) {
      return state[STATE];
    },
  },
  mutations: {
    [AUTH.MUTATION](state: State, plyload: boolean) {
      state[STATE] = plyload;
    },
  },
  actions: {
    [api]({ commit }: ActionContext<State, any>) {
      return axios.post<boolean>(api).then(({ data }) => {
        commit(AUTH.MUTATION, data);
        return data;
      });
    },
  },
} as Module<State, any>;