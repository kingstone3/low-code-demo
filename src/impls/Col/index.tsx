import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Col extends Base {
  isNative = false;
  componentPath = ['Col'];

  constructor(elementInit: ElementInit) {
    super({
      label: 'Col',
      ...elementInit,
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
