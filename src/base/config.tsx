import { Form } from 'antd';

import Editor from './editor';

export default abstract class Config extends Editor {
  propRender = () => {
    return (
      <Form>
        <Form.Item label="label"></Form.Item>

        {this.renderItems()}
      </Form>
    );
  };

  abstract renderItems(): React.ReactNode;
}
