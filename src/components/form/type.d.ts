import { VNode, CreateElement, VNodeDirective, VueConstructor } from "vue/types/umd";
import { ScopedSlot } from "vue/types/vnode";

export type ObjectValue<T> = {
  [P in keyof T]: T[P];
};

export type LayoutCallback = (
  h: CreateElement,
  option: object,
  index?: number | string,
) => VNode;

export interface Col {
  item: object;
  col: object;
}

export type Content = undefined | null | string | number | VNode | VNode[];

export type VueClass = string | string[] | object;

export type VueStyle = string | object;

export type Component = string | VueConstructor;

export interface Column {
  label?: string;
  prop?: string;
  labelSlot?: string;
  slot?: string;
  newline?: boolean;
  wrapClass?: VueClass;
  component?: Component;
  other?: ObjectValue<object>;
  class?: VueClass;
  style?: VueStyle;
  ref?: string;
  directives?: VNodeDirective[];
  slotScopeds?: ScopedSlot;
  slots?: { [key: string]: string | [any] };
  hide?: boolean;
  [key: string]: any;
}

export interface LayoutOption {
  rowOption: object;
  colOption: object;
  column: Column[];
}