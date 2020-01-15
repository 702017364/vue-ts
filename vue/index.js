const vue = require('../src/const/vue.json');

const { env } = process;
for(const key in vue){
  env[key] = vue[key];
}

module.exports = (dirname) => {
  //bind
};