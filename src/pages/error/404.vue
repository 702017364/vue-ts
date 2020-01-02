<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import Error from './mixin.vue';

@Component
export default class E404 extends Mixins(Error) {
  title: string = '404';
}
</script> 