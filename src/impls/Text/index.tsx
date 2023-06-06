import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import classes from './index.module.css';

export default class Text extends Base {
  isNative = false;
  componentPath = ['Typography', 'Text'];

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Text',
      ...elementInit,
      props: {
        className: classes.wrapper,
        ...elementInit?.props,
      },
      style: {
        ...elementInit?.style,
      },
    });
  }

  getConfigFields(): Record<string, any> {
    return {
      id: this.id,
      content: this.content,
    };
  }

  renderConfigItems(): ReactNode {
    return (
      <>
        <Form.Item label="文字内容" name="content">
          <Input.TextArea />
        </Form.Item>
      </>
    );
  }

  hanldeConfigFinish(values: Record<string, any>): void {
    this.content = values.content;
  }
}
