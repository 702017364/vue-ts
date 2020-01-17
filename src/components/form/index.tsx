import { Vue, Component, Prop, Ref } from 'vue-property-decorator';
import { ElForm } from 'element-ui/types/form';
import { ElFormDefaults } from './defaults';
import { ElFormExcludes, ElFormItemProps } from './options';
import { CreateElement, VNode } from 'vue/types/umd';
import LayoutClass from './LayoutClass';
import renderComponent from '../mixins/renderComponent';
import inc4excludes2merge from '@/utils/inc4excludes2merge';
import styles from '@css/public.module.scss';
import { Column, ComponentOption, Content } from './type';

@Component({
  inheritAttrs: false,
})
export default class AppForm extends Vue {
  @Prop({ required: true, default: () => ({}) }) model!: object; // ElForm.model
  @Prop() rules?: object; // ElForm.rules
  @Prop({ required: true, default: () => [] }) column!: Column[]; // 列设置
  /*
    {
      [...ElFormItem], // ElFormItem props
      labelSlot?: string // ElFormItem slot label
      slot?: string // ElFormItem slot default
      newline?: boolean // 当前行是否从新行开始布局（2）
      wrapClass?: VueClass // 设置列 class（2）
      component?: Component // @字段作为该组件的 props 和 on （以 /^on[A-Z]/ 区分）（1）
      other?: ObjectValue // 用于补充@字段
      [...@], // 其它字段（用于设置与已有字段会造成冲突的部分）
      class?: VueClass  // 组件的 class（1）
      style?: VueStyle // 组件的样式（1）
      ref?: string // 组件的 ref（1）
      directives?: VNodeDirective[] // 组件的自定义指令（1）
      slotScopeds?: ScopedSlot // 组件的 slotScopeds（1）
      attrs?: ObjectValue // 设置组件的原生属性（1）
      slots?: { //组件的 slots（1）
        [key: string]: string // 引用已有的 slot
          | [T] // 传递一个 T 类型的值
      }
    }
    // （1） 未设置 slot 且设置 component 时生效
    // （2） 仅 layout = true 时有效
  */
  @Prop() layout?: boolean; // 是否使用 layout 布局
  @Prop({ default: () => ({}) }) rowOption?: object; // ElRow props（仅 layout = true 时有效）
  @Prop({ default: () => ({}) }) colOption?: object; // ElCol default props（仅 layout = true 时有效）

  @Ref() readonly form!: ElForm;
  private get cache(): object {
    return inc4excludes2merge(ElFormExcludes, ElFormDefaults, this.$props, this.$attrs)[1];
  }

  render(h: CreateElement) {
    const { cache: props, layout } = this;
    const option = {
      ref: 'form',
      class: styles.layout,
      props,
    };
    return (
      <el-form { ...option }>
        {
          layout === true
            ? this.renderLayout(h)
            : this.renderFormItems(h)
        }
      </el-form>
    );
  }

  private renderLayout(h: CreateElement): VNode[] {
    return new LayoutClass(this as any, this.renderFormItem).render(h);
  }

  private renderFormItems(h: CreateElement): VNode[] {
    return (this.column || []).reduce<VNode[]>((list, column, index) => {
      if(column.hide === true) return list;
      const vnode = this.renderFormItem(h, column, index);
      list.push(vnode);
      return list;
    }, []);
  }

  private renderFormItem(h: CreateElement, option: Column, index?: number | string): VNode {
    const [ formItemOption, componentOption ] = inc4excludes2merge(true, ElFormItemProps, option);
    const { prop } = formItemOption as any;
    const cache = prop && (this.model as any)[prop];
    const { component, slot, labelSlot } = componentOption as Column;
    const label = labelSlot && this.$slots[labelSlot];
    const value = component || slot
      ? this.renderContent(h, prop, cache, componentOption)
      : cache;
    return (
      <el-form-item { ...{ key: index, props: formItemOption } }>
        {
          label
            ? <template slot='label'>{ label }</template>
            : ''
        }
        { value }
      </el-form-item>
    );
  }

  private renderContent(h: CreateElement, prop: string, value: any, option: ComponentOption): Content<any> {
    return new renderComponent(this, this.model, { prop, value, option }).render(h);
  }
}