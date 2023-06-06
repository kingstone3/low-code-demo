import { Form } from 'antd';

import { BaseInit } from '.';

import Editor from './editor';

export interface ConfigInit {}

export default abstract class Config extends Editor {
  abstract renderItems(): React.ReactNode;

  constructor(init?: BaseInit) {
    super(init);
  }

  propRender = () => {
    return (
      <Form>
        <Form.Item label="label"></Form.Item>

        {this.renderItems()}
      </Form>
    );
  };
}
