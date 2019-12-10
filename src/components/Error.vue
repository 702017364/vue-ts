<template>
  <div :class="$style.body">
    <h2 :class="$style.title">{{title}}</h2>
    <p :class="$style.detail">{{detail}}</p>
    <div :class="$style.buttons">
      <el-button @click="handleHome">首页</el-button>
      <el-button @click="handleBack">返回</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    title: string;
  }
}

@Component
export default class Error extends Vue {
  title: string = '';
  detail: string = '';

  private handleBack(): void {
    this.$router.go(-1);
  }
  private handleHome(): void {
    this.$router.push('./');
  }
}
</script>

<style lang="scss" module>
  .body{
    @include mcenter(to);
  }
</style>