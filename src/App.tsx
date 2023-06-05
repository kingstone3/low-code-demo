import { useCallback } from 'react';
import { useImmer } from 'use-immer';

import Factory from './components/Factory';
import Editor from './components/Editor';
import Config from './components/Config';

import Container from './impls/Container';

import type Element from './base/element';

import classes from './index.module.css';

export default function App() {
  const [{ schema }, setSchema] = useImmer<{ schema: Element }>({
    schema: new Container(),
  });

  const pushChildren = useCallback(
    (parentId: string, element: Element) => {
      setSchema((draft) => {
        const parent = draft.schema.findById(parentId);

        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(element);
        }
      });
    },
    [setSchema],
  );

  return (
    <div className={classes.wrapper}>
      <Factory />

      <Editor schema={schema} pushChildren={pushChildren} />

      <Config />
    </div>
  );
}
