import { LoginForm } from '@/types';
import { MockUrl } from './util';
import mockjs from 'mockjs';
import { UserInfo } from '@/types';
import { login } from '@/api';

MockUrl<LoginForm, UserInfo>(login, {
  parse: true,
  template(data) {
    return {
      id: mockjs.mock('@guid'),
      token: mockjs.mock('@guid'),
      login_name: data.username,
    };
  },
});