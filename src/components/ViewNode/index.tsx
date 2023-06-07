import { useEffect, useState } from 'react';
import * as Antd from 'antd';
import { Spin } from 'antd';
import { get } from 'lodash-es';

import type Base from '../../base';

export default function ViewNode({ element }: { element: Partial<Base> }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(element.request ? true : false);

  let Tag;
  if (element.isNative) {
    Tag = element?.componentPath?.[0];
  } else {
    Tag = get(Antd, element.componentPath!);
  }

  useEffect(() => {
    const init = async () => {
      if (element.request) {
        setLoading(true);

        const result = await Object.getPrototypeOf(
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          async function () {},
        ).constructor(element.request)();

        setData(result);
        setLoading(false);
      }
    };

    init();
  }, [element.request]);

  if (element.request) {
    return (
      <Spin spinning={loading}>
        <Tag
          {...element.props}
          {...data}
          key={element.id}
          className={element.className}
          style={element.style}
        >
          {element.content
            ? element.content
            : Array.isArray(element.children)
            ? element.children.map((item) => {
                return <ViewNode key={item.id} element={item} />;
              })
            : null}
        </Tag>
      </Spin>
    );
  } else {
    return (
      <Tag
        {...element.props}
        key={element.id}
        className={element.className}
        style={element.style}
      >
        {element.content
          ? element.content
          : Array.isArray(element.children)
          ? element.children.map((item) => {
              return <ViewNode key={item.id} element={item} />;
            })
          : null}
      </Tag>
    );
  }
}
