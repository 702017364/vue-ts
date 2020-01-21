import { Vue, Component, Ref } from 'vue-property-decorator';

@Component
export default class Mixin extends Vue {
  @Ref() readonly three!: HTMLDivElement;

  get width(): number {
    return this.three.clientWidth;
  }

  get height(): number {
    return this.three.clientHeight;
  }
}