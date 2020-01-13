import { Col, LayoutCallback, LayoutOption, Column } from './type';
import { CreateElement } from 'vue/types/umd';
import { ElColIncludes } from './options';
import inc4excludes2merge from '@/utils/inc4excludes2merge';

const MAX = 24;

export default class {
  private rows: Col[][] = [];
  private row: Col[] = [];
  private amount: number = 0;

  private newline: boolean;
  private rowOption: object;
  private colOption: object;
  private columns: Column[];
  private callback: LayoutCallback;

  constructor(option: LayoutOption, callback: LayoutCallback) {
    this.rowOption = option.rowOption;
    this.colOption = option.colOption;
    this.columns = option.column;
    this.newline = true;
    this.callback = callback;
    this.init();
  }

  render(h: CreateElement) {
    const { rowOption, callback } = this;
    return this.rows.map((row, i) => (
      <el-row { ...{ key: i, props: rowOption } }>
        {
          row.map(({ item, col }, j) => {
            const cls = (col as any).wrapClass;
            return (
              <el-col { ...{ class: cls, key: j, props: col } }>
                { callback(h, item, `${i}.${j}`) }
              </el-col>
            );
          })
        }
      </el-row>
    ));
  }

  private init(): void {
    this.columns.forEach(this.format);
  }

  private format = (column: Column = {}): void => {
    if(column.hide === true) return;
    if(this.newline === true) {
      this.add();
    }
    const [ newColOption, formItemOption ] = inc4excludes2merge(
      true,
      ElColIncludes,
      this.colOption,
      column,
    );
    if((newColOption as any).newline === true && this.row.length > 0) {
      this.add();
    }
    this.row.push({
      item: formItemOption,
      col: newColOption,
    });
    this.formatAmount(newColOption);
  }

  private add(): void {
    const row = this.row = [];
    this.rows.push(row);
    this.newline = false;
    this.amount = 0;
  }

  private formatAmount({ span = MAX, offset = 0 }): void {
    const make = span + offset;
    const amount = this.amount += make;
    if(amount >= MAX) {
      this.newline = true;
    }
  }
}