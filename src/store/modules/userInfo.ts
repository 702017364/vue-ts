import { LOGIN, IS_LOGIN } from '../types';
import { UserInfo, UserLoginForm } from '@/types/user';
import { ActionContext } from 'vuex';

interface State {
  userInfo: UserInfo;
}

export default {
  state: {
  },
  mutations: {
    [LOGIN]: (state: State, value: UserInfo) => {
      state.userInfo = value;
    },
  },
  actions: {
    login({ commit }: ActionContext<State, any>, form: UserLoginForm) {
      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          commit(IS_LOGIN, true);
          commit(LOGIN, { b: 1 });
          resolve({ a: 1 });
        }, 1e3);
      });
    },
  },
};