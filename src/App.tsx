import { useCallback, useRef, useState } from 'react';
import { Modal } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Factory from './components/Factory';
import EditorNode from './components/EditorNode';
import ViewNode from './components/ViewNode';
import Config from './components/Config';

import { schema } from './impls/Container';

import type Base from './base';

import classes from './app.module.css';

export default function App() {
  const [currentConfigElement, setCurrentConfigElement] = useState<Base>();
  const [viewSchema, setViewSchema] = useState<Partial<Base>>();

  const [, _flush] = useState(Symbol('flush'));

  const handleView = useCallback(() => {
    // TODO: 对 schema 实现 toString 方法，并支持解析为 object
    setViewSchema(schema);
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
              element={schema}
              currentConfigElement={currentConfigElement}
              setCurrentConfigElement={setCurrentConfigElement}
            />
          </div>

          <Config
            currentConfigElement={currentConfigElement}
            flush={flush}
            onPreview={handleView}
          />
        </div>
      </DndProvider>

      <Modal
        destroyOnClose
        open={!!viewSchema}
        width="100vw"
        style={{ top: 0, height: '100vh' }}
        footer={null}
        onCancel={() => {
          setViewSchema(undefined);
        }}
      >
        <ViewNode element={viewSchema!} />
      </Modal>
    </>
  );
}
