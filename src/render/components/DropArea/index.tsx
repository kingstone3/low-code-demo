import React from 'react';

import type Element from '../../../base/element';

import Col from '../../../impls/Col';

import classes from './index.module.css';

export default function DropArea({
  id,
  pushChildren,
  children,
}: {
  id: string;
  pushChildren: (parentId: string, element: Element) => void;
  children: React.ReactElement;
}) {
  return (
    <div
      id={id}
      className={classes.wrapper}
      onClick={(e) => {
        pushChildren(e.currentTarget.id, new Col());
      }}
    >
      {children}
    </div>
  );
}
