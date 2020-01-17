export interface UserInfo {
  id: string;
  token: string;
  login_name: string;
  password?: string;
}

export interface LoginForm {
  username: string;
  password: string;
  code?: string;
}