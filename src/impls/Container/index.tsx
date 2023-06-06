import { ReactNode } from 'react';
import Base from '../../base';

import Row from '../Row/element';

export default class Container extends Base {
  template = (<div />);

  constructor() {
    super('Container', {
      children: [
        new Row({
          style: {
            minHeight: '100px',

            padding: '10px',
            gap: '10px',

            backgroundColor: '#ffffff',

            userSelect: 'none',
          },
        }),
      ],
      style: {
        display: 'flex',
        flexDirection: 'column',

        gap: '10px',

        padding: '10px',

        backgroundColor: '#ffffff',
      },
    });
  }

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
