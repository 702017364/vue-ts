import { MockUrl } from './util';
import { AUTH } from '@/api';
import mockjs from 'mockjs';

MockUrl<boolean, any>(AUTH, {
  template() {
    return mockjs.mock({
      'number|1-3': 3,
    }).number > 2;
  },
});