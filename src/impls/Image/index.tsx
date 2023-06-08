import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import classes from './index.module.css';

export default class Image extends Base {
  isNative = false;
  componentPath = ['Image'];

  static previewNode = (<div>Image</div>);
  static type = 'Image';

  constructor(elementInit?: ElementInit) {
    super({
      ...elementInit,
      type: 'Image',
      className: classes.wrapper,
    });
  }

  getConfigFields(): Record<string, string | number | undefined> {
    return {
      src: this.props?.src as unknown as string,
    };
  }

  renderConfigItems(): ReactNode {
    return (
      <>
        <Form.Item label="图片地址" name="src">
          <Input />
        </Form.Item>
      </>
    );
  }

  hanldeConfigFinish(
    values: Record<string, string | number | undefined>,
  ): void {
    this.props = {
      ...this.props,
      src: values.src,
    };
  }
}
