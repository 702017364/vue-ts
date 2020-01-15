import { IS_LOGIN } from '../types';

interface State {
  isLogin: boolean;
}

export default {
  state: {
    isLogin: false,
  },
  getters: {
    isLogin: (state: State) => state.isLogin,
  },
  mutations: {
    [IS_LOGIN]: (state: State, value: boolean) => {
      state.isLogin = value;
    },
  },
};