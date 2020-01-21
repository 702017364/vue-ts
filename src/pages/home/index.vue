<template>
  <layout-view>
    <el-tabs
      v-model="active"
      :class="$style.tabs">
      <el-tab-pane
        v-for="([ label, component ], index) in list"
        :key="index"
        :label="label"
        :name="`${index}`"
        :lazy="true"
        >
        <component
          :is="component"
          :class="$style.three"
        ></component>
      </el-tab-pane>
    </el-tabs>
  </layout-view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutView from './view.vue';
import ThreeCube from './three/cube.vue';
import { VueConstructor } from 'vue/types/umd';

type Tuple = [string, VueConstructor];

@Component({
  components: {
    LayoutView,
    ThreeCube,
  },
})
export default class Home extends Vue {
  private list: Tuple[] = [
    ThreeCube,
  ].map((component) => [component.name, component]);

  private active: string = '0';
}
</script>

<style lang="scss" module>
  .tabs{
    flex: 1; display: flex; flex-direction: column;

    > :global(.el-tabs__header){
      margin-bottom: 0;
    }

    > :global(.el-tabs__content){
      flex: 1; display: flex;
    }

    :global(.el-tab-pane){
      flex: 1; display: flex; overflow: hidden;
    }
  }

  .three{
    flex: 1;

    > canvas{
      display: block;
    }
  }
</style>