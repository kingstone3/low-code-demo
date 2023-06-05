import EditorNode from './components/EditorNode';

import type Element from '../../base/element';

import classes from './index.module.css';

export default function Editor({
  schema,
  pushChildren,
}: {
  schema: Element;
  pushChildren: (parentId: string, element: Element) => void;
}) {
  return (
    <div className={classes.wrapper}>
      <EditorNode element={schema} pushChildren={pushChildren} />
    </div>
  );
}
