import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Row extends Base {
  isNative = false;
  componentPath = ['Row'];

  static previewNode = (<div>Row</div>);
  static type = 'Row';

  constructor(elementInit?: ElementInit) {
    super({
      ...elementInit,
      type: 'Row',
    });
  }

  getConfigFields(): Record<string, any> {
    throw new Error('Method not implemented.');
  }

  renderConfigItems(): ReactNode {
    throw new Error('Method not implemented.');
  }

  hanldeConfigFinish(values: Record<string, any>): void {
    throw new Error('Method not implemented.');
  }
}
