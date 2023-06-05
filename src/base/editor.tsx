import { Form } from 'antd';

export default abstract class Editor {
  canEdit = true;

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
