<template>
  <div :class="$style.body">
    <h2 :class="$style.title">
      <span
        v-for="(text, index) in texts"
        :key="index"
        :class="{
          [$style.zero]: index % 2 == 1
        }"
      >{{text}}</span>
    </h2>
    <p :class="$style.detail">{{detail}}</p>
    <div :class="$style.buttons">
      <el-button
        type="text"
        @click="handleHome"
      >首页</el-button>
      <el-button 
        type="primary"
        @click="handleBack"
      >{{backLabel}}</el-button>
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
  limit: number = 5;
  private id: number = -1;

  get texts(): string[] {
    return this.title.split('').slice(0, 3);
  }

  get backLabel(): string {
    const { limit } = this;
    const label = '返回';
    if(limit >= 0) {
      return `${label}（${limit} s）`;
    } else {
      return label;
    }
  }

  mounted() {
    let { limit } = this;
    if(limit > 0) {
      const id = this.id = window.setInterval(() => {
        this.limit = --limit;
        if(limit < 0) {
          this.clearInterval();
          this.handleBack();
        }
      }, 1e3);
    }
  }

  handleBack(): void {
    this.$router.go(-1);
  }
  handleHome(): void {
    this.$router.push('./');
  }
  clearInterval(): void {
    const { id } = this;
    if(id === -1) { return; }
    window.clearInterval(id);
  }

  beforeDestroy() {
    this.clearInterval();
  }
}
</script>

<style lang="scss" module>
  @import 'mixin';
</style>