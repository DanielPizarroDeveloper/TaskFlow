/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { Avatar, Badge } from 'evergreen-ui'
import { Droppable } from '../../Arrastrable/Droppable'
import { Draggable } from '../../Arrastrable/Draggable'
import { updateTask } from '../../../database/query/update/update'

import '../../../css/card-complete.css'
import { DeleteTask } from '../ModalTask/DeleteTask'

export function Complete({ taskID, proyecto, droppedStates, idElement, id, titulo, responsable, estado, esfuerzo, descripcion }) {
  const isFirstTime = useRef(true)
  const [isTaskOption, setIsTaskOption] = useState(false);
  const [isActivate, setIsActivate] = useState(true);
  const categoriaColor = 'green';
  useEffect(() => {
    if(isFirstTime.current) {
      isFirstTime.current = false
      return
    }

    const updateTaskID = async () => {
      updateTask({idElement, estado})
    }

    updateTaskID()
  }, [droppedStates])

  //Este método va a cambiar el valor del useState de False a True cuando el valor cambie
  const handlerActivate = () => {
    setIsTaskOption((prevState) => !prevState);
    setIsActivate((prevState) => !prevState);
  }

  return (
    <>
      {
        isActivate ? (
          <Droppable id={id} key={idElement}>
            { droppedStates  === 'FINALIZADO' ? 
              <Draggable id={id} key={idElement}>
                <article className='article-card-complete'>
                  <div className='article-card-complete__task'>
                    <div className='article-card-complete__task-bar'></div>
                    <div className='article-card-complete__task-content'>
            
                    <div className='article-card-complete__task__panel-titulo'>
                        <div className='article-card-complete__task__panel__content'>
                          <svg className='article-card-complete__task__panel__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                          <h4 className='article-card-complete__task__titulo'>{titulo}</h4>
                        </div>
                        <div className='article-card-complete__task__panel__content__button' onMouseUp={() => handlerActivate()}>
                          <svg className='article-card-complete__task__panel__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </div>
                      </div>
            
                      <div className='article-card-complete__task__content-responsable'>
                        <Avatar name={responsable} color={categoriaColor} size={40} />
                        <span className='article-card-complete__task__content-titulo'>{responsable}</span>
                      </div>
            
                      <div className='article-card-complete__task-content-estado'>
                        <span className='article-card-complete__task__content_estado-titulo'>Estado</span>
                        <Badge color={categoriaColor} marginRight={8}>
                          {estado}
                        </Badge>
                      </div>
            
                      <div className='article-card-complete__task-content-esfuerzo'>
                        <span className='article-card-complete__task__content__esfuerzo-span'>Esfuerzo</span>
                        <span className='article-card-complete__task__content__esfuerzo-span'>{esfuerzo}</span>
                      </div>
                    </div>
                  </div>
                </article>
                {
                  isTaskOption && <DeleteTask isTalked={isTaskOption} onActivate={handlerActivate} />
                }
              </Draggable> : <div className='droppable-content'></div>
            }
          </Droppable>
        ) : (
          <div>
            <button>
              <article className='article-card-complete'>
                <div className='article-card-complete__task'>
                  <div className='article-card-complete__task-bar'></div>
                  <div className='article-card-complete__task-content'>
          
                  <div className='article-card-complete__task__panel-titulo'>
                      <div className='article-card-complete__task__panel__content'>
                        <svg className='article-card-complete__task__panel__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h4 className='article-card-complete__task__titulo'>{titulo}</h4>
                      </div>
                      <div className='article-card-complete__task__panel__content__button' onMouseUp={() => handlerActivate()}>
                        <svg className='article-card-complete__task__panel__svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </div>
                    </div>
          
                    <div className='article-card-complete__task__content-responsable'>
                      <Avatar name={responsable} color={categoriaColor} size={40} />
                      <span className='article-card-complete__task__content-titulo'>{responsable}</span>
                    </div>
          
                    <div className='article-card-complete__task-content-estado'>
                      <span className='article-card-complete__task__content_estado-titulo'>Estado</span>
                      <Badge color={categoriaColor} marginRight={8}>
                        {estado}
                      </Badge>
                    </div>
          
                    <div className='article-card-complete__task-content-esfuerzo'>
                      <span className='article-card-complete__task__content__esfuerzo-span'>Esfuerzo</span>
                      <span className='article-card-complete__task__content__esfuerzo-span'>{esfuerzo}</span>
                    </div>
                  </div>
                </div>
              </article>
              {
                isTaskOption && 
                  <DeleteTask
                    taskID={taskID}
                    ID={idElement}
                    proyecto={proyecto}
                    tituloActividad={titulo} 
                    color={categoriaColor}
                    estado={estado}
                    descripcion={descripcion}
                    isTalked={isTaskOption} 
                    onActivate={handlerActivate} 
                  />
              }
            </button>
          </div>
        )
      }
    </>
  )
}