<template>
  <div :class="$style.wrap">
    <h1 :class="$style.title">{{title}}</h1>
    <app-form
      :model="model"
      :column="column"
      ></app-form>
    <el-button
      :class="$style.login"
      type="primary"
      :disabled="disabled || loginIn"
      @click="handleClick">登录</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppForm from '@/components/form';
import { Column } from '@/components/form/type';
import { UserLoginForm } from '@/types/user';
import { LOGIN } from '@/store/types';
import api from '@/api';

@Component({
  components: {
    AppForm,
  },
})
export default class Userlogin extends Vue {
  private model: UserLoginForm = {
    username: '',
    password: '',
    code: '',
  };
  private column: Column[] = [
    {
      prop: 'username',
      component: 'el-input',
      placeholder: '请输入用户名',
      ['prefix-icon']: 'el-icon-user',
      autocomplete: 'off',
    },
    {
      prop: 'password',
      component: 'el-input',
      placeholder: '请输入密码',
      ['show-password']: true,
      ['prefix-icon']: 'el-icon-lock',
      autocomplete: 'off',
    },
  ];
  private loginIn: boolean = false;

  get disabled(): boolean {
    const { model } = this;
    return model.username === '' || model.password === '';
  }
  get title(): string {
    return this.$t('title');
  }

  private async handleClick(): Promise<void> {
    this.loginIn = true;
    const { data } = await this.$http.post<UserLoginForm>(api.login, this.model);
    const value = await this.$store.dispatch('login', this.model);
  }
}
</script>

<style lang="scss" module>
  .wrap{
    width: f2rem(380px); padding: f2rem(16px); box-sizing: border-box; box-shadow: 0 f2rem(3px) f2rem(12px) $gcolor-shadow;
  }

  .title{
    margin-bottom: .5em; text-align: center;
  }

  .login{
    $this-letter: .8em;

    width: 50%; margin: 0 auto; border-radius: 1em; font-size: f2rem(16px); text-indent: $this-letter; letter-spacing: $this-letter; display: block;
  }
</style>