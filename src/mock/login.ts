import { UserLoginForm } from '@/types/user';
import { MockUrl } from './util';
import api from '@/api';
import mockjs from 'mockjs';

MockUrl<UserLoginForm>(api.login, {
  parse: true,
  template(data) {
    return {
      id: mockjs.mock('@guid'),
      username: data.username,
    };
  },
});