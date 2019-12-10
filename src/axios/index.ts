import axios from 'axios';
import merge from 'lodash/merge';
import { baseURL } from '@/const/env';

axios.defaults = merge(axios.defaults, {
  timeout: 3e4,
  withCredentials: true,
  baseURL,
});

export default axios;