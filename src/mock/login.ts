import { LoginForm } from '@/types';
import { MockUrl } from './util';
import api from '@/api';
import mockjs from 'mockjs';
import { UserInfo } from '@/types';

MockUrl<LoginForm, UserInfo>(api.login, {
  parse: true,
  template(data) {
    return {
      id: mockjs.mock('@guid'),
      token: mockjs.mock('@guid'),
      login_name: data.username,
    };
  },
});