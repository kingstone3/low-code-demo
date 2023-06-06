import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';

import Text from '../Text';
import Table from '../Table';

import classes from './index.module.css';

export default class Container extends Base {
  isNative = true;
  componentPath = ['div'];

  constructor() {
    super({
      label: 'Container',
      props: {
        className: classes.wrapper,
      },
      children: [
        new Text({
          content: 123,
        }),
        new Table(),
      ],
    });
  }

  getConfigFields() {
    return {
      id: this.id,
      backgroundColor: this.style?.backgroundColor,
    };
  }

  renderConfigItems(): ReactNode {
    return (
      <>
        <Form.Item label="背景颜色" name="backgroundColor">
          <Input />
        </Form.Item>
      </>
    );
  }

  hanldeConfigFinish(values: { backgroundColor: string | undefined }): void {
    this.style = this.style || {};

    this.style.backgroundColor = values.backgroundColor;
  }
}
