import { ReactNode } from 'react';

import Element from '../../base/element';
import Editor from '../../base/editor';

import Row from '../Row';

export default class ContainerComponent extends Element {
  constructor() {
    super('Container', {
      children: [new Row(), new Row(), new Row()],
      style: {
        display: 'flex',
        flexDirection: 'column',

        gap: '10px',

        padding: '10px',

        backgroundColor: '#ffffff',
      },
    });
  }

  template = (<div />);

  editor = new ContainEditor();
}

class ContainEditor extends Editor {
  canEdit = false;

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
