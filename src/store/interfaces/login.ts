import { ActionContext, Module } from 'vuex';
import axios from '@/axios';
import api from '@/api';
import { UserInfo, LoginForm } from '@/types';
import { USERINFO } from '@/store/types';

const STATE = Symbol(USERINFO.STATE);

interface State {
  [STATE]: UserInfo | null;
}

export default {
  state: {
    [STATE]: null,
  },
  mutations: {
    [USERINFO.MUTATION](state: State, payload: UserInfo) {
      state[STATE] = payload;
    },
  },
  actions: {
    [USERINFO.ACTION]({ commit }: ActionContext<State, any>, form: LoginForm) {
      return axios.post<UserInfo>(api.login, form).then(({ data }) => {
        commit(USERINFO.MUTATION, data);
        return data;
      });
    },
  },
} as Module<State, any>;