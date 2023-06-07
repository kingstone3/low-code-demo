import { useDroppable } from '@dnd-kit/core';

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
