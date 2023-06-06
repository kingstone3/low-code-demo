import { useEffect, useState } from 'react';
import * as Antd from 'antd';
import { get } from 'lodash-es';

import type Base from '../../base';

export default function PreviewNode({ element }: { element: Partial<Base> }) {
  const [loading, setLoading] = useState(element.request ? true : false);
  const [data, setData] = useState<any[]>([]);

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
          async function () {},
        ).constructor(element.request)();

        setData(result);
        setLoading(false);
      }
    };

    init();
  }, [element.request]);

  console.log(data);

  return (
    <Tag
      {...element.props}
      {...data}
      key={element.id}
      className={element?.props?.className}
      style={{
        ...element.style,
      }}
    >
      {element.content
        ? element.content
        : Array.isArray(element.children)
        ? element.children.map((item) => {
            return <PreviewNode key={item.id} element={item} />;
          })
        : null}
    </Tag>
  );
}
