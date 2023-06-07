import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Col extends Base {
  isNative = false;
  componentPath = ['Col'];

  static previewNode = (<div>Col</div>);
  static type = 'Col';

  constructor(elementInit: ElementInit) {
    super({
      ...elementInit,
      type: 'Col',
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
