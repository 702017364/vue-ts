import { VNode, CreateElement, VNodeDirective, VueConstructor } from 'vue/types/umd';
import { ScopedSlot } from 'vue/types/vnode';

export interface ObjectValue<T> {
  [key: string]: T;
}

export type ObjectAny = ObjectValue<any>;

export type LayoutCallback = (
  h: CreateElement,
  option: object,
  index?: number | string,
) => VNode;

export interface Col {
  item: object;
  col: object;
}

export type Content<T> = VNode | VNode[] | undefined | T;

export type VueClass = string | string[] | object;

export type VueStyle = string | object;

export type AppComponent = string | VueConstructor;

export interface JSXBase {
  class?: VueClass;
  style?: VueStyle;
  ref?: string;
  directives?: VNodeDirective[];
  slotScopeds?: ScopedSlot;
  attrs?: ObjectAny;
}

export interface JSXOption extends JSXBase {
  props: ObjectAny;
  attrs: ObjectAny;
  on: ObjectAny;
}

export interface ComponentOption extends JSXBase {
  slot?: string;
  component?: AppComponent;
  other?: ObjectAny;
  slots?: { [key: string]: string | [any] };
}

export interface Column extends ComponentOption {
  label?: string;
  prop?: string;
  labelSlot?: string;
  newline?: boolean;
  wrapClass?: VueClass;
  hide?: boolean;
  [key: string]: any;
}

export interface LayoutOption {
  rowOption: object;
  colOption: object;
  column: Column[];
}