<template>
  <div :class="$style.header">
    <h1 :class="$style.title">{{title}}</h1>
    <ul :class="$style.menu">
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        tabindex="-1"
        tag="li">{{item.label}}</router-link>
    </ul>
    <div :class="$style.buttons"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Menu {
  label: string;
  path: string;
}

@Component
export default class Header extends Vue {
  menu: Menu[] = [
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
}
</script>

<style lang="scss" module>
  .header{
    height: $home-header; line-height: $elButton-height; display: flex; align-items: center;

    &::before{
      content: ''; display: block; flex: 1;
    }
  }
  .title{
    margin-left: $whole-spac; padding-left: f2rem(50px); font-size: f2rem(22px); order: -1; background: furl('logo.png') no-repeat 10% 50%;
  }
  .menu{
    $this-size: f2rem(20px);
    $this-spac: f2rem(64px);
    $this-mright: fcalc-single($this-spac, 2);

    margin-right: $this-mright; font-size: $this-size; font-weight: 500; display: flex;

    > li{
      $this-item-plr: f2rem(12px);
      $this-item-mlr: fcalc(
        fcalc-single($this-spac, 2),
        fcalc-single($this-item-plr, -1),
      );

      margin: 0 $this-item-mlr; padding: 0 $this-item-plr; position: relative; cursor: pointer;

      &:hover, &:focus{
        color: $gcolor-active;
      }
    }
  }
</style>