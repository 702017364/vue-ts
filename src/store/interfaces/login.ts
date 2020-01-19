import { ActionContext, Module } from 'vuex';
import axios from '@/axios';
import { UserInfo, LoginForm } from '@/types';
import { USERINFO } from '@/store/types';
import { LOGIN } from '@/api';

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
    [LOGIN]({ commit }: ActionContext<State, any>, form: LoginForm) {
      return axios.post<UserInfo>(LOGIN, form).then(({ data }) => {
        commit(USERINFO.MUTATION, data);
        return data;
      });
    },
  },
} as Module<State, any>;