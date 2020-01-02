let baseURL = '';

const env = process.env;
const { NODE_ENV: mode }: { NODE_ENV: string } = env;
const debug = mode !== 'production';

if(mode === 'development') {
  baseURL = 'http://192.168.81.14:53003/';
} else if(mode === 'production') {
  //
}

export {
  env,
  mode,
  debug,
  baseURL,
};