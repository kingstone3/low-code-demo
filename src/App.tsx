import { useCallback, useState } from 'react';
import { Modal } from 'antd';
import { DndContext, DragOverlay } from '@dnd-kit/core';

import Factory from './components/Factory';
import EditorNode from './components/EditorNode';
import ViewNode from './components/ViewNode';
import Config from './components/Config';

import { schema } from './impls/Container';

import type Base from './base';

import classes from './app.module.css';
import cardClasses from './components/Factory/components/Card/index.module.css';

export default function App() {
  const [currentConfigElement, setCurrentConfigElement] = useState<Base>();
  const [viewSchema, setViewSchema] = useState<Partial<Base>>();

  const [activeId, setActiveId] = useState(null);

  const [, _flush] = useState(Symbol('flush'));

  const handleView = useCallback(() => {
    // TODO: 对 schema 实现 toString 方法，并支持解析为 view object
    setViewSchema(schema);
  }, []);

  const flush = useCallback(() => {
    _flush(Symbol('flush'));
  }, []);

  function handleDragStart(event) {
    setActiveId(event.active.id);

    setCurrentConfigElement(undefined);
  }

  function handleDragEnd(event) {
    setActiveId(null);

    const { active, over } = event;

    if (over && over.data.current.element.type === 'Container') {
      over.data.current.element.appendChildByIndex(
        new active.data.current.elementType(),
      );
    }

    setCurrentConfigElement(undefined);
  }

  // 通过 dnd-kit，可以检测拖拽过程中各种数据，
  // 再配合 Element 中记录的组件相关配置，可以实现各种元素间操作的规则，
  // 本例中只展示 column Container 的 appendChild 规则
  return (
    <>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={classes.wrapper}>
          <Factory activeId={activeId} />

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

        <DragOverlay>
          {activeId ? (
            <div className={cardClasses.wrapper}>{activeId}</div>
          ) : null}
        </DragOverlay>
      </DndContext>

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
