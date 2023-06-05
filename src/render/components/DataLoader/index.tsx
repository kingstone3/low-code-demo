import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import Element from '../../../base/element';

export default function DataLoader({
  dataLoader,
  children,
}: {
  dataLoader?: Element['dataLoader'];
  children: React.ReactElement;
}) {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(dataLoader ? true : false);

  useEffect(() => {
    const init = async () => {
      if (dataLoader) {
        setLoading(true);

        const data = await dataLoader();

        setData(data);

        setLoading(false);
      }
    };

    init();
  }, [dataLoader]);

  return (
    <Spin spinning={loading}>
      {React.cloneElement(children, data ?? undefined)}
    </Spin>
  );
}
