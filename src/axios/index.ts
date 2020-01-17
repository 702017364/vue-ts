import axios, { AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';
import { baseURL } from '@/const/env';
import { onRequestFulfilled, onRequestRejected } from './request';
import { onResponseFulfilled, onResponseRejected } from './response';

const { defaults, interceptors } = axios;

axios.defaults = merge(defaults, {
  timeout: 3e4,
  withCredentials: true,
  baseURL,
} as AxiosRequestConfig);

interceptors.request.use(onRequestFulfilled, onRequestRejected);
interceptors.response.use(onResponseFulfilled, onResponseRejected);

export default axios;