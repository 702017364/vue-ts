let baseURL = '';

const env = process.env;
const { NODE_ENV: mode } = env;

if(mode === 'development') {
  baseURL = 'http://192.168.81.14:53003/';
}

export { baseURL };