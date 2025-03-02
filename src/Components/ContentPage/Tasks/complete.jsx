/* eslint-disable react/prop-types */
import { Avatar, Badge } from 'evergreen-ui';
import { Delete } from '../ModalTask/Delete';
import { Opcion } from '../ModalTask/Opcion';
import { useEffect, useRef, useState } from 'react';
import { Droppable } from '../../Arrastrable/Droppable';
import { Draggable } from '../../Arrastrable/Draggable';
import { getTasks } from '../../../js/database/queries/select/select';
import { updateTaskEstado } from '../../../js/database/queries/update/update';

import '../../../css/Board/card.css';
import '../../../css/Board/complete.css';

export function Complete({ taskID, proyecto, droppedStates, idElement, id, titulo, responsable, estado, esfuerzo, descripcion, callbackFunction }) {
  const isFirstTime = useRef(true)
  const [isTaskOption, setIsTaskOption] = useState(false);
  const [isActivate, setIsActivate] = useState(true);
  const [effectCard, setEffectCard] = useState(false);
  const categoriaColor = 'green';

  useEffect(() => {
    if(isFirstTime.current) {
      isFirstTime.current = false
      return
    }

    const updateTaskID = async () => {
      const getTasksAll = await getTasks({proyecto: proyecto});
      if (getTasksAll.length === 0) {
        return
      }
      else {
        updateTaskEstado({idElement, proyecto, estado});
      }
    }

    updateTaskID()
  }, [droppedStates])

  //Este método va a cambiar el valor del useState de False a True cuando el valor cambie.
  //Su función es renderizar las actividades de las columnas
  const handlerActivate = () => {
    setIsTaskOption((prevState) => !prevState);
    setIsActivate((prevState) => !prevState);
  }

  const deleteTaskSelected = (deleteTaskSelected) => {
    setEffectCard(deleteTaskSelected);
  }

  return (
    <>
      {
        isActivate ? (
          <Droppable id={id} key={idElement}>
            { droppedStates  === 'FINALIZADO' ? 
              <Draggable id={id} key={idElement}  effectCard={effectCard} taskID={id}>
                <div className='article-card__task'>
                  <div className='article-card__task-bar green-background'></div>
                  <div className='article-card__task-content'>
                    <div className='article-card__task__panel-titulo'>
                      <div className='article-card__task__panel__content'>
                        <svg className='article-card__task__panel__svg green-color' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' />
                        </svg>
                        <h4 className='article-card__task__titulo green-color'>{titulo}</h4>
                      </div>
                        
                      <div className='article-card__task__panel__content__button__option green-option' onMouseUp={() => handlerActivate()}>
                        <svg className='article-card__task__panel__svg green-color' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                          <path d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
                        </svg>
                      </div>
                    </div>
          
                    <div className='article-card__task__content-responsable'>
                      <Avatar name={responsable} color={categoriaColor} size={40} />
                      <span className='article-card__task__content-titulo green-color'>{responsable}</span>
                    </div>
                    
                    <div className='article-card__task-content-detail'>
                      <span className='article-card__task__content_estado-titulo green-color'>Estado</span>
                      <Badge color={categoriaColor}>
                        {estado}
                      </Badge>
                    </div>
                    
                    <div className='article-card__task-content-detail'>
                      <span className='article-card__task__content__detail-span green-color'>Esfuerzo</span>
                      <span className='article-card__task__content__detail-span green-color'>{esfuerzo}</span>
                    </div>
                    
                    <div className='article-card__task-content-detail'>
                      <span className='article-card__task__content__detail-span green-color'>Descripción</span>
                      <span className='article-card__task__content__detail-span green-color span__descripcion' title={descripcion}>{descripcion}</span>
                    </div>
                  </div>
                </div>
                {
                  isTaskOption && <Delete isTalked={isTaskOption} onActivate={handlerActivate} />
                }
              </Draggable> : <div className='droppable-content'></div>
            }
          </Droppable>
        ) : (
          <div className='draggable'>
            <button>
              <div className='article-card__task'>
                <div className='article-card__task-bar green-background'></div>
                <div className='article-card__task-content'>
                  <div className='article-card__task__panel-titulo'>
                    <div className='article-card__task__panel__content'>
                      <svg className='article-card__task__panel__svg green-color' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' />
                      </svg>
                      <h4 className='article-card__task__titulo green-color'>{titulo}</h4>
                    </div>
                      
                    <div className='article-card__task__panel__content__button__option green-option' onMouseUp={() => handlerActivate()}>
                      <svg className='article-card__task__panel__svg green-color' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
                      </svg>
                    </div>
                  </div>
                  
                  <div className='article-card__task__content-responsable'>
                    <Avatar name={responsable} color={categoriaColor} size={40} />
                    <span className='article-card__task__content-titulo green-color'>{responsable}</span>
                  </div>
                  
                  <div className='article-card__task-content-detail'>
                    <span className='article-card__task__content_estado-titulo green-color'>Estado</span>
                    <Badge color={categoriaColor}>
                      {estado}
                    </Badge>
                  </div>
                  
                  <div className='article-card__task-content-detail'>
                    <span className='article-card__task__content__detail-span green-color'>Esfuerzo</span>
                    <span className='article-card__task__content__detail-span green-color'>{esfuerzo}</span>
                  </div>
                  
                  <div className='article-card__task-content-detail'>
                    <span className='article-card__task__content__detail-span green-color'>Descripción</span>
                    <span className='article-card__task__content__detail-span green-color span__descripcion' title={descripcion}>{descripcion}</span>
                  </div>
                </div>
              </div>
              {
                isTaskOption && 
                  <Opcion 
                    taskID={taskID}
                    ID={idElement}
                    proyecto={proyecto}
                    tituloActividad={titulo}
                    estado={estado}
                    esfuerzo={esfuerzo}
                    descripcion={descripcion}
                    isTalked={isTaskOption} 
                    onActivate={handlerActivate}
                    callbackFunction={callbackFunction}
                    deleteTaskSelected={deleteTaskSelected}
                  />
              }
            </button>
          </div>
        )
      }
    </>
  )
}