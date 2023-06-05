import { Typography } from 'antd';

import classes from './index.module.css';

export default function Config() {
  return (
    <div className={classes.wrapper}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        配置
      </Typography.Title>
    </div>
  );
}
