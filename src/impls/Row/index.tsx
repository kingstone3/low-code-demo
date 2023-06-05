import { ReactNode } from 'react';
import { Row } from 'antd';

import Editor from '../../base/editor';
import Element from '../../base/element';

export default class RowComponent extends Element {
  constructor() {
    super('Row', {
      style: {
        minHeight: '100px',

        padding: '10px',

        backgroundColor: '#ffffff',
      },
    });
  }

  template = (<Row />);

  editor = new RowEditor();
}

class RowEditor extends Editor {
  canEdit = false;

  renderItems(): ReactNode {
    throw new Error('Method not implemented.');
  }
}