/* eslint-disable react/prop-types */
import { useDroppable } from '@dnd-kit/core';

import '../../css/Board/card.css';

export function Droppable ({ id, children }) {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <div className='draggable' ref={setNodeRef}>
      {children}
    </div>
  )
}