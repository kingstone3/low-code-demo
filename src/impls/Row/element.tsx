import { ReactNode } from 'react';
import { Row as AntdRow } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Row extends Base {
  template = (<AntdRow />);

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Row',
      ...elementInit,
      style: {
        ...elementInit?.style,
      },
    });
  }

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
