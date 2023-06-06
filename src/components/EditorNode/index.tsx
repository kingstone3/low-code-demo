import React from 'react';

import type Base from '../../base';
import Col from '../../impls/Col';

export default function EditorNode({
  element,
  pushChildren,
  deleteChild,
}: {
  element: Base;
  pushChildren: (parent: Base, element: Base) => void;
  deleteChild: (parent: Base, id: string) => void;
}) {
  return React.cloneElement(
    element.template,
    {
      ...element.props,
      key: element.id,
      style: {
        ...element.template?.props.style,
        ...element.style,
      },
      onClick: (e: any) => {
        e.stopPropagation();

        pushChildren(
          element,
          new Col({
            style: {
              width: '100px',
            },
            props: {
              span: 6,
            },
          }),
        );
      },
    },
    element.content
      ? element.content
      : Array.isArray(element.children)
      ? element.children.map((item) => {
          return (
            <EditorNode
              key={item.id}
              element={item}
              pushChildren={pushChildren}
              deleteChild={deleteChild}
            />
          );
        })
      : null,
  );
}
