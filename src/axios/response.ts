import { AxiosResponse as Response } from 'axios';

export const onResponseFulfilled = (res: Response): Response => {
  return res;
};

export const onResponseRejected = (error: any): any => {
  return error;
};