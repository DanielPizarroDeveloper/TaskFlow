/* eslint-disable react/prop-types */
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  
  return (
    <button className={props.id === props.taskID && props.effectCard ? 'blur-out' : undefined} ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}