import React from 'react';

import type Base from '../../../../base';

import Col from '../../../../impls/Col';

import classes from './index.module.css';

export default function DropArea({
  element,
  pushChildren,
  deleteChild,
  children,
}: {
  element: Base;
  pushChildren: (parent: Base, element: Base) => void;
  deleteChild: (parent: Base, id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={element.content ? undefined : classes.wrapper}
      onClick={(e) => {
        e.stopPropagation();

        if (element.content) {
          deleteChild(element.parent!, element.id);

          return;
        }

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
      }}
    >
      {children}
    </div>
  );
}
