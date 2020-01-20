<template>
  <div :class="$style.header">
    <h1 :class="$style.title">{{title}}</h1>
    <div :class="$style.menu">
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        tabindex="0"
        :active-class="$style.active"
      >{{item.label}}</router-link>
    </div>
    <div :class="$style.buttons">
      <template v-if="auth">
        <el-button type="text">进入中心</el-button>
        <el-button>退出</el-button>
      </template>
      <template v-else>
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button>免费注册</el-button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { AUTH } from '@/store/types';

interface Menu {
  label: string;
  path: string;
}

@Component
export default class Header extends Vue {
  @Getter(AUTH.GET) private auth!: boolean;

  private menu: Menu[] = [
    {
      label: '首页',
      path: '/wel/index',
    },
    {
      label: '功能',
      path: '/features',
    },
    {
      label: '教程',
      path: '/',
    },
    {
      label: '关于我们',
      path: '/about',
    },
  ];

  get title(): string {
    return this.$t('title');
  }

  handleLogin(): void {
    this.$router.push('/login');
  }
}
</script>

<style lang="scss" module>
  @import 'header';
</style>