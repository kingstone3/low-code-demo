import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import classes from './index.module.css';

export default class Table extends Base {
  isNative = false;
  componentPath = ['Table'];

  hasRequest = true;

  static previewNode = (<div>Table</div>);
  static type = 'Table';

  constructor(elementInit?: ElementInit) {
    super({
      props: {
        columns: [
          {
            title: '示例字段',
            dataIndex: 'a',
          },
          {
            title: '示例字段2',
            dataIndex: 'b',
          },
          {
            title: '示例字段2',
            dataIndex: 'c',
          },
          {
            title: '示例字段3',
            dataIndex: 'd',
          },
          {
            title: '示例字段4',
            dataIndex: 'e',
          },
          {
            title: '示例字段5',
            dataIndex: 'f',
          },
          {
            title: '示例字段6',
            dataIndex: 'g',
          },
          {
            title: '示例字段7',
            dataIndex: 'h',
          },
          {
            title: '示例字段8',
            dataIndex: 'i',
          },
        ],
      },
      ...elementInit,
      type: 'Table',
      className: classes.wrapper,
    });
  }

  getConfigFields(): Record<string, any> {
    return {};
  }

  renderConfigItems(): ReactNode {
    return <></>;
  }

  hanldeConfigFinish(values: Record<string, any>): void {
    this.content = values.content;
    this.request = values.request;
  }
}
