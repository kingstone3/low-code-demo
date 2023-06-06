import { ReactNode } from 'react';
import Base from '../../base';

export default class Container extends Base {
  template = (<div />);

  constructor() {
    super({
      label: 'Container',
      style: {
        display: 'flex',
        flexDirection: 'column',

        gap: '10px',

        width: '100%',

        margin: '10px',
        padding: '10px',

        backgroundColor: '#ffffff',
      },
    });
  }

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
