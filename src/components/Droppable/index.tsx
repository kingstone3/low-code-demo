import { useDroppable } from '@dnd-kit/core';
import classnames from 'classnames';

import classes from './index.module.css';

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.element.id,
    data: {
      element: props.element,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={classnames(
        classes.wrapper,
        {
          [classes.isOver]: isOver && props.element.type === 'Container',
        },
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
