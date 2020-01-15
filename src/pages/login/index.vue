<template>
  <div :class="$style.outer">
    <div :class="$style.body">
      <user-login></user-login>
    </div>
  </div>
</template>

<script lang="ts">
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

<style lang="scss" module>
  @import 'index';
</style>