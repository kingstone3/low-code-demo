import { ReactNode } from 'react';
import { Col as AntdCol } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Col extends Base {
  template = (<AntdCol />);

  constructor(init?: ElementInit) {
    super('Col', init);
  }

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
