/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Avatar, Badge } from 'evergreen-ui'
import { Droppable } from '../../Arrastrable/Droppable'
import { Draggable } from '../../Arrastrable/Draggable'
import { updateTask } from '../../../database/query/update/update'

import '../../../css/card-new.css'

export function New({droppedStates, idElement, id, titulo, responsable, estado, esfuerzo}) {
  
  useEffect(() => {
    const updateTaskID = async () => {
      updateTask({idElement, estado})
    }

    updateTaskID()
  }, [droppedStates])
  
  return (
    <Droppable id={id} key={idElement}>
      {droppedStates === 'NUEVO' ? (
        <Draggable id={id}  key={idElement}>
          <article className='article-card-new'>
            <div className='article-card-new__task'>
              <div className='article-card-new__task-bar'></div>
              <div className='article-card-new__task-content'>   
                <div className='article-card-new__task__panel-titulo'>
                  <svg className='article-card-new__task__panel__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <h4 className='article-card-new__task__titulo'>{titulo}</h4>
                </div>
                    
                <div className='article-card-new__task__content-responsable'>
                  <Avatar name={responsable} color="purple" size={40} zIndex={1} />
                  <span className='article-card-new__task__content-titulo'>{responsable}</span>
                </div>
                    
                <div className='article-card-new__task-content-estado'>
                  <span className='article-card-new__task__content_estado-titulo'>Estado</span>
                  <Badge color="purple" marginRight={8}>
                    {estado}
                  </Badge>
                </div>
                    
                <div className='article-card-new__task-content-esfuerzo'>
                  <span className='article-card-new__task__content__esfuerzo-span'>Esfuerzo</span>
                  <span className='article-card-new__task__content__esfuerzo-span'>{esfuerzo}</span>
                </div>
              </div>
            </div>
          </article>
        </Draggable>
      ): (
        <div className='droppable-content'></div>
      )}
    </Droppable>
  )
}