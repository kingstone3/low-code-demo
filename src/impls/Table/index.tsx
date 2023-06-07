import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import classes from './index.module.css';

export default class Table extends Base {
  isNative = false;
  componentPath = ['Table'];

  hasRequest = true;

  constructor(elementInit?: ElementInit) {
    super({
      type: 'Table',
      ...elementInit,
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
