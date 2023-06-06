import { ReactNode } from 'react';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import classes from './index.module.css';

export default class Text extends Base {
  isNative = false;
  componentPath = ['Table'];

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Table',
      ...elementInit,
      props: {
        ...elementInit?.props,
        className: classes.wrapper,
      },
    });
  }

  getConfigFields(): Record<string, any> {
    return {
      id: this.id,
    };
  }

  renderConfigItems(): ReactNode {
    return <></>;
  }

  hanldeConfigFinish(values: Record<string, any>): void {
    this.content = values.content;
  }
}
