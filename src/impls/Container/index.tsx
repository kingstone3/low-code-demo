import { ReactNode } from 'react';
import { Form, Input } from 'antd';

import Base from '../../base';
import Element, { ElementInit } from '../../base/element';

import Text from '../Text';
import Table from '../Table';

import classes from './index.module.css';

export default class Container extends Base {
  isNative = true;
  componentPath = ['div'];

  static previewNode = (<div>Container</div>);
  static type = 'Container';

  constructor(elementInit?: ElementInit) {
    super({
      ...elementInit,
      type: 'Container',
      className: classes.wrapper,
      children: [new Text(), new Table()],
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

export function findById(id: string): Element | undefined {
  let result: Element | undefined;
  let isGet = false;

  function deepSearch(tree: Element[], id: string) {
    for (let i = 0; i < tree.length; i++) {
      if ((tree[i]?.children?.length ?? 0) > 0) {
        deepSearch(tree[i].children!, id);
      }

      if (id === tree[i].id || isGet) {
        if (!isGet) {
          result = tree[i];
        }

        isGet = true;

        break;
      }
    }
  }

  deepSearch([schema], id);

  return result;
}
