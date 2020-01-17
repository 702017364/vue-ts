import Vue from 'vue';
import { ObjectValue } from './type';
import { hump } from '@/utils';

export const getProps = (componentName: string): ObjectValue | null => {
  const name = hump(componentName, true);
  return (Vue.component(name) as any)?.options?.props ?? null;
};

export const ElColIncludes = [
  'span',
  'offset',
  'push',
  'pull',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'tag',
  'newline',
  'wrapClass',
];

export const ElFormExcludes = [
  'column',
  'layout',
  'rowOption',
  'colOption',
];

export const ElFormItemProps: object | [] = getProps('el-form-item') || [
  'label',
  'prop',
  'labelWidth',
  'required',
  'rules',
  'error',
  'showMessage',
  'inliniMessage',
  'size',
];