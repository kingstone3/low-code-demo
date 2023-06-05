import React from 'react';

import DropArea from '../../../../render/components/DropArea';
import DataLoader from '../../../../render/components/DataLoader';

import type Element from '../../../../base/element';

export default function EditorNode({
  element,
  pushChildren,
}: {
  element: Element;
  pushChildren: (parentId: string, element: Element) => void;
}) {
  console.log(element.style);
  return (
    <DropArea id={element.id} pushChildren={pushChildren}>
      <DataLoader dataLoader={element.dataLoader}>
        {React.cloneElement(element.template, {
          ...element.props,
          key: element.id,
          style: { ...element.template?.props.style, ...element.style },
          children: Array.isArray(element.children)
            ? element.children.map((item) => {
                return (
                  <EditorNode
                    key={item.id}
                    element={item}
                    pushChildren={pushChildren}
                  />
                );
              })
            : undefined,
        })}
      </DataLoader>
    </DropArea>
  );
}
