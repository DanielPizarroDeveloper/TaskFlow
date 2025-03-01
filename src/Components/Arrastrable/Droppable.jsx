/* eslint-disable react/prop-types */
import { useDroppable } from '@dnd-kit/core';

export function Droppable ({ id, children }) {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div style={{marginBottom: '2%', marginRight: '2%'}} ref={setNodeRef}>
      {children}
    </div>
  )
}