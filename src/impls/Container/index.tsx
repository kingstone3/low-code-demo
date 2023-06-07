import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import { ElementInit } from '../../base/element';

import Text from '../Text';
import Table from '../Table';

import classes from './index.module.css';

export default class Container extends Base {
  isNative = true;
  componentPath = ['div'];

  constructor(elementInit?: ElementInit) {
    super({
      label: 'Container',
      ...elementInit,
      className: classes.wrapper,
      children: [
        new Text({
          content: 123,
        }),

        new Table({
          props: {
            columns: [
              {
                title: '实例',
                dataIndex: 'a',
              },
              {
                title: '实例2',
                dataIndex: 'b',
              },
            ],
          },
        }),
      ],
    });
  }

  getConfigFields() {
    return {
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

  hanldeConfigFinish(values: Record<string, any>): void {
    this.style = this.style || {};

    this.style = {
      ...this.style,
      backgroundColor: values.backgroundColor,
    };
  }
}

export const schema = new Container();
