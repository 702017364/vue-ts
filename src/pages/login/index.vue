<template>
  <div class=""></div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import UserLogin from './userlogin.vue';

@Component({
  components: {
    UserLogin,
  },
})
export default class Login extends Vue {

}
</script>