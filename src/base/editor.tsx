import { Form } from 'antd';

export abstract class Editor {
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
