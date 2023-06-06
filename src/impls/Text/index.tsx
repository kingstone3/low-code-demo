import { ReactNode } from 'react';
import { Typography } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Text extends Base {
  template = (<Typography.Text />);

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Text',
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
