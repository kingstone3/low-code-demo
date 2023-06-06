import * as Antd from 'antd';
import { get } from 'lodash-es';

import type Base from '../../base';

export default function PreviewNode({ element }: { element: Partial<Base> }) {
  let Tag;
  if (element.isNative) {
    Tag = element?.componentPath?.[0];
  } else {
    Tag = get(Antd, element.componentPath!);
  }

  return (
    <Tag
      {...element.props}
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
