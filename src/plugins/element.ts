import Vue from 'vue';
import Scrollbar from 'element-ui/lib/scrollbar';
import locale from 'element-ui/lib/locale';
import lang from '@c/lang';
import {
  Button,
  Input,
  Select,
} from 'element-ui';

locale.use(lang);
[
  Button,
  Input,
  Select,
  Scrollbar,
].forEach((Component) => {
  Vue.component(Component.name, Component);
});