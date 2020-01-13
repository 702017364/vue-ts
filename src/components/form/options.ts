import Vue from 'vue';

const getProps = (componentName: string): object => {
  return (Vue.component(componentName) as any)?.options?.props;
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

export const ElFormItemProps: object | [] = getProps('ElFormItem') || [
  'prop',
  'label',
  'labelWidth',
  'required',
  'rules',
  'error',
  'showMessage',
  'inliniMessage',
  'size',
];