import Vue from 'vue';
import { Button, Select } from 'element-ui';
import Scrollbar from 'element-ui/lib/scrollbar';
import locale from 'element-ui/lib/locale';
import lang from '@/components/lang';

locale.use(lang);

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Scrollbar.name, Scrollbar);