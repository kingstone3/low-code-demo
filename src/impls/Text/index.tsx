import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Text extends Base {
  isNative = false;
  componentPath = ['Typography', 'Text'];

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Text',
      ...elementInit,
    });
  }

  getConfigFields(): Record<string, any> {
    return {
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
