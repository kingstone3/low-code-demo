import React from 'react';

import DropArea from './components/DropArea';

import type Base from '../../../../base';

export default function EditorNode({
  element,
  pushChildren,
  deleteChild,
}: {
  element: Base;
  pushChildren: (parent: Base, element: Base) => void;
  deleteChild: (parent: Base, id: string) => void;
}) {
  return (
    <DropArea
      element={element}
      pushChildren={pushChildren}
      deleteChild={deleteChild}
    >
      {React.cloneElement(
        element.template,
        {
          ...element.props,
          key: element.id,
          style: {
            ...element.template?.props.style,
            ...element.style,
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
      )}
    </DropArea>
  );
}
