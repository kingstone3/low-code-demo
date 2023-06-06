import EditorNode from './components/EditorNode';

import type Base from '../../base';

import classes from './index.module.css';

export default function Editor({
  schema,
  pushChildren,
  deleteChild,
}: {
  schema: Base;
  pushChildren: (parent: Base, string: Base) => void;
  deleteChild: (parent: Base, id: string) => void;
}) {
  return (
    <div className={classes.wrapper}>
      <EditorNode
        element={schema}
        pushChildren={pushChildren}
        deleteChild={deleteChild}
      />
    </div>
  );
}
