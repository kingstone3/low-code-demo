import { Typography } from 'antd';

import classes from './index.module.css';

export default function Factory() {
  return (
    <div className={classes.wrapper}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        组件
      </Typography.Title>
    </div>
  );
}
