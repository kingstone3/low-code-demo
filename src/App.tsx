import { useCallback, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Factory from './components/Factory';
import EditorNode from './components/EditorNode';
import Config from './components/Config';

import Container from './impls/Container';

import type Base from './base';

import classes from './index.module.css';

export default function App() {
  const schema = useRef<Base>(new Container());

  const [currentConfigElement, setCurrentConfigElement] = useState<Base>();

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

  const flush = useCallback(() => {
    _flush(Symbol('flush'));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.wrapper}>
        <Factory />

        <EditorNode
          element={schema.current}
          currentConfigElement={currentConfigElement}
          setCurrentConfigElement={setCurrentConfigElement}
          pushChildren={pushChildren}
          deleteChild={deleteChild}
        />

        <Config currentConfigElement={currentConfigElement} flush={flush} />
      </div>
    </DndProvider>
  );
}
