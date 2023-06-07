import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

export default class Text extends Base {
  isNative = false;
  componentPath = ['Typography', 'Text'];

  constructor(elementInit?: ElementInit) {
    super({
      type: 'Text',
      ...elementInit,
    });
  }

  getConfigFields(): Record<string, string | number | undefined> {
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

  hanldeConfigFinish(
    values: Record<string, string | number | undefined>,
  ): void {
    this.content = values.content;
  }
}
