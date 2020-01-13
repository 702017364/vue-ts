import Vue from 'vue';
import { CreateElement, VNode } from 'vue/types/umd';
import formatComponent from './formatComponent';
import each from '@/utils/each';
import { NormalizedScopedSlot } from 'vue/types/vnode';
import { ComponentOption, Content } from '../form/type';

interface Params<T> {
  prop: string;
  value: T;
  option: ComponentOption;
}

interface ScopedSlot {
  [key: string]: NormalizedScopedSlot | undefined;
}

interface Slot {
  [key: string]: VNode[] | undefined;
}

export default class<T> {
  private $scopedSlots: ScopedSlot;
  private $slots: Slot;
  private data: object;
  private params: Params<T>;
  private prop: string;
  private value: T;
  private option: ComponentOption;

  constructor(component: Vue, data: object, params: Params<T>) {
    this.$scopedSlots = component.$scopedSlots;
    this.$slots = component.$slots;
    this.data = data;
    this.params = params;
    const { prop, value, option } = params;
    this.prop = prop;
    this.value = value;
    this.option = option;
  }

  render(h: CreateElement): Content<T> {
    const { value } = this;
    const { component, slot } = this.option;
    if(slot && typeof slot === 'string') {
      return this.slotMode(h, slot);
    } else if(component) {
      return this.componentMode(h, component);
    }
    return value;
  }

  private slotMode(h: CreateElement, name: string): Content<T> {
    const slot = this.$scopedSlots[name];
    if(slot) return slot(this.params);
    return this.value;
  }

  private componentMode(h: CreateElement, component: NonNullable<any>): Content<T> {
    const cache = this.getComponentOption();
    const slots = this.getComponentSlots(h);
    return h(component, cache, slots);
  }

  private getComponentSlots(h: CreateElement): VNode[] {
    const { $slots } = this;
    const { slots: slotsOption } = this.option;
    const slots: VNode[] = [];
    if(slotsOption && typeof slotsOption === 'object') {
      each(slotsOption, (key, value) => {
        if(!value) return;
        let slot;
        if(typeof value === 'string') {
          slot = $slots[value];
        } else if(Array.isArray(value) && value.length > 0) {
          [ slot ] = value as any;
        }
        if(slot !== undefined || slot !== null) {
          const content = h('template', { slot: key }, slot);
          slots.push(content);
        }
      });
    }
    return slots;
  }

  private getComponentOption(): ReturnType<typeof formatComponent> {
    const { option, data, prop } = this;
    const { class: cls, slotScopeds, ref, directives, style, attrs } = option;
    const cache = formatComponent(option, (opt) => {
      opt.props.value = this.value;
      opt.on.input = (val: any): void => (data as any)[prop] = val;
    });
    if(cls) cache.class = cls;
    if(style) cache.style = style;
    if(ref) cache.ref = ref;
    if(directives) cache.directives = directives;
    if(slotScopeds) cache.slotScopeds = slotScopeds;
    if(attrs) cache.attrs = attrs;
    return cache;
  }
}