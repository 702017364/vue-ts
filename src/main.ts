import Vue from 'vue';
import '@/plugins/element';
import VueAxios from 'vue-axios';
import router from '@/router';
import store from '@/store';
import axios from '@/axios';
import '@/styles/index.scss';
import App from '@/App.vue';
import { t } from 'element-ui/lib/locale';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
Vue.prototype.$t = t;
Vue.prototype.$ELEMENT = {
  size: 'small',
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
