<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Error from '@/components/error.vue';

@Component({
  mixins: [ Error ],
})
export default class Error404 extends Vue {
  title: string = '404';
}
</script> 