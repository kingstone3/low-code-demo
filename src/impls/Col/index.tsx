import { ReactNode } from 'react';
import { Col } from 'antd';

import Editor from '../../base/editor';
import Element from '../../base/element';

export default class ColComponent extends Element {
  constructor() {
    super('Col', {
      style: {
        minWidth: '100px',
        minHeight: '100px',
      },
    });
  }

  template = (<Col />);

  editor = new ColEditor();
}

class ColEditor extends Editor {
  canEdit = false;

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}
