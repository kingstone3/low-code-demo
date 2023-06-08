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
