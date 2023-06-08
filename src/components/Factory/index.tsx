import { Space, Typography } from 'antd';

import Container from '../../impls/Container';
import Table from '../../impls/Table';
import Text from '../../impls/Text';
import Image from '../../impls/Image';

import Card from './components/Card';

import classes from './index.module.css';

export default function Factory() {
  return (
    <div className={classes.wrapper}>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        组件
      </Typography.Title>

      <Space wrap>
        {[Container, Text, Table, Image].map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </Space>
    </div>
  );
}
