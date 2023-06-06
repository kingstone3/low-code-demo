import { useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Factory from './components/Factory';
import Editor from './components/Editor';
import Config from './components/Config';

import Container from './impls/Container';

import type Base from './base';

import classes from './index.module.css';

export default function App() {
  const schema = useRef<Base>(new Container());

  const [, _flush] = useState(Symbol('flush'));

  const pushChildren = useCallback((parent: Base, element: Base) => {
    if (parent) {
      element.parent = parent;
      parent.children = parent.children || [];
      parent.children.push(element);

      _flush(Symbol('flush'));
    }
  }, []);

  const deleteChild = useCallback((parent: Base, id: string) => {
    if (parent) {
      parent.children = parent.children!.filter((child) => {
        return child.id !== id;
      });

      _flush(Symbol('flush'));
    }
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.wrapper}>
        <Factory />

        <Editor
          schema={schema.current}
          pushChildren={pushChildren}
          deleteChild={deleteChild}
        />

        <Config />
      </div>
    </DndProvider>
  );
}
