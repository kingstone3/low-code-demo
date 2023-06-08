import { useEffect } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';

import Base from '../../base';

import classes from './index.module.css';

export default function Config({
  currentConfigElement,
  flush,
  onPreview,
}: {
  currentConfigElement: Base | undefined;
  flush: () => void;
  onPreview: () => void;
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();

    if (currentConfigElement) {
      form.setFieldsValue({
        id: currentConfigElement.id,
        request: currentConfigElement.hasRequest
          ? currentConfigElement.request
          : undefined,
        ...currentConfigElement.getConfigFields(),
      });
    }
  }, [currentConfigElement, form]);

  return (
    <div className={classes.wrapper}>
      <Typography.Title
        level={4}
        style={{
          marginTop: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        配置
        <Button
          type="primary"
          onClick={() => {
            onPreview();
          }}
        >
          预览
        </Button>
      </Typography.Title>

      <Form
        form={form}
        onFinish={(values) => {
          if (currentConfigElement) {
            currentConfigElement.hanldeConfigFinish({
              ...values,
              id: currentConfigElement.id,
              request: currentConfigElement.hasRequest
                ? values.request
                : undefined,
            });

            flush();
          }
        }}
      >
        <Form.Item label="组件ID" name="id">
          <Input disabled />
        </Form.Item>

        {currentConfigElement?.renderConfigItems()}

        {currentConfigElement?.hasRequest ? (
          <Form.Item label="请求方法" name="request">
            <Input.TextArea />
          </Form.Item>
        ) : null}

        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              disabled={!currentConfigElement}
            >
              确认
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
