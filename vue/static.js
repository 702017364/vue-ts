const { env } = process;
const vue = {
  VUE_APP_TITLE: 'APP',
};

for(const key in vue){
  env[key] = vue[key];
}