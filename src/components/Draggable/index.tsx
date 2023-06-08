import { useDraggable } from '@dnd-kit/core';

export default function Draggable(props) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.elementType.type,
    data: {
      elementType: props.elementType,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={props.className}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}
