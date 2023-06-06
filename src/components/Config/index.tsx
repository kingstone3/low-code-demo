import { useEffect } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';

import Base from '../../base';

import classes from './index.module.css';

export default function Config({
  currentConfigElement,
  flush,
}: {
  currentConfigElement: Base | undefined;
  flush: () => void;
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!currentConfigElement) {
      form.resetFields();
    } else {
      form.setFieldsValue(currentConfigElement.getConfigFields());
    }
  }, [currentConfigElement, form]);

  return (
    <div className={classes.wrapper}>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        配置
      </Typography.Title>

      <Form
        form={form}
        onFinish={(values) => {
          if (currentConfigElement) {
            currentConfigElement.hanldeConfigFinish(values);

            flush();
          }
        }}
      >
        <Form.Item label="组件ID" name="id">
          <Input disabled />
        </Form.Item>

        {currentConfigElement?.renderConfigItems()}

        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              disabled={!currentConfigElement}
            >
              确认
            </Button>

            <Button>预览</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
