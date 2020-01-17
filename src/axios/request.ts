import { AxiosRequestConfig as Request } from 'axios';

export const onRequestFulfilled = (res: Request): Request => {
  return res;
};

export const onRequestRejected = (error: any): any => {
  return error;
};