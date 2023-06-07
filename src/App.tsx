import { useCallback, useRef, useState } from 'react';
import { Modal } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Factory from './components/Factory';
import EditorNode from './components/EditorNode';
import PreviewNode from './components/PreviewNode';
import Config from './components/Config';

import Container from './impls/Container';

import type Base from './base';

import classes from './index.module.css';

export default function App() {
  const schema = useRef<Base>(new Container());

  const [currentConfigElement, setCurrentConfigElement] = useState<Base>();
  const [previewSchema, setPreviewSchema] = useState<Partial<Base>>();

  const [, _flush] = useState(Symbol('flush'));

  const handlePreview = useCallback(() => {
    setPreviewSchema(JSON.parse(JSON.stringify(schema.current)));
  }, []);

  const flush = useCallback(() => {
    _flush(Symbol('flush'));
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className={classes.wrapper}>
          <Factory />

          <div style={{ flexGrow: 1, padding: 10 }}>
            <EditorNode
              element={schema.current}
              currentConfigElement={currentConfigElement}
              setCurrentConfigElement={setCurrentConfigElement}
            />
          </div>

          <Config
            currentConfigElement={currentConfigElement}
            flush={flush}
            onPreview={handlePreview}
          />
        </div>
      </DndProvider>

      <Modal
        destroyOnClose
        open={!!previewSchema}
        width="100vw"
        style={{ top: 0, height: '100vh' }}
        footer={null}
        onCancel={() => {
          setPreviewSchema(undefined);
        }}
      >
        <PreviewNode element={previewSchema!} />
      </Modal>
    </>
  );
}

// const pushChildren = useCallback((parent: Base, element: Base) => {
//   if (parent) {
//     element.parent = parent;
//     parent.children = parent.children || [];
//     parent.children.push(element);

//     _flush(Symbol('flush'));
//   }
// }, []);

// const deleteChild = useCallback((parent: Base, id: string) => {
//   if (parent) {
//     parent.children = parent.children!.filter((child) => {
//       return child.id !== id;
//     });

//     _flush(Symbol('flush'));
//   }
// }, []);
