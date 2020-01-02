<template>
  <layout-view></layout-view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutView from './view.vue';

@Component({
  components: {
    LayoutView,
  },
})
export default class Home extends Vue {
}
</script>