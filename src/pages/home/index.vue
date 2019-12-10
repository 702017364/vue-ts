<template>
  <el-scrollbar 
    :class="$style.home"
    :wrap-class="$style.wrap"
    :view-class="$style.view">
    <layout-header></layout-header>
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutHeader from './header.vue';

@Component({
  components: {
    LayoutHeader,
  },
})
export default class Layout extends Vue {

}
</script>

<style lang="scss" module>
  .home{
    height: 100%; overflow: hidden;
  }
  .wrap{
    overflow-x: hidden;
  }
  .view{
    min-height: 100%; display: flex; flex-direction: column;
  }
</style>