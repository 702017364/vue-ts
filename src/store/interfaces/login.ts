import { ActionContext, Module } from 'vuex';
import axios from '@/axios';
import { UserInfo, LoginForm } from '@/types';
import { USERINFO, AUTH } from '@/store/types';
import { LOGIN as api } from '@/api';

const STATE = 'login';

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
    [api]({ commit }: ActionContext<State, any>, form: LoginForm) {
      return axios.post<UserInfo>(api, form).then(({ data }) => {
        commit(AUTH.MUTATION, true);
        commit(USERINFO.MUTATION, data);
        return data;
      });
    },
  },
} as Module<State, any>;