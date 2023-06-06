import { ReactNode } from 'react';
import { Col as AntdCol } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Col extends Base {
  template = (<AntdCol />);

  constructor(elementInit: ElementInit) {
    super({
      label: 'Col',
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
