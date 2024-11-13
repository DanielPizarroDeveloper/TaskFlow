import { DndContext } from '@dnd-kit/core';
import { Header } from './ContentPage/header';
import { Menu } from './ContentPage/menu';
import { New } from './ContentPage/Tasks/new';
import { InProgress } from './ContentPage/Tasks/inProgress';
import { Complete } from './ContentPage/Tasks/complete';
import { useEffect, useState } from 'react';
import { getTasks } from '../database/query/select/getTasks';
import { UseAuth } from './Autenticacion/UseAuth';
import { useNavigate } from 'react-router-dom';

export function TaskFlow () {
  const { user } = UseAuth()
  const navigate = useNavigate()

  const [proyecto, setProyecto] = useState(null)
  const [tasksFirebase, setTasksFirebase] = useState([])
  const [droppedStates, setDroppedStates] = useState([null])
  const [app_main_section, setApp_main_section] = useState('app-main__section')
    
  useEffect(() => {
    if(!proyecto) 
    {
      return
    }
    else 
    {
      const getAllTasks = async () => {
        const getTasksAll = await getTasks({proyecto: proyecto})
        const sortedTasks = getTasksAll.sort((a, b) => a.idTask - b.idTask)
        setTasksFirebase(sortedTasks)
        const estado = getTasksAll.map(item => item.estado)
        setDroppedStates(estado)
      }
      getAllTasks()
    }
  }
  , [proyecto])

  useEffect(() => {
    if (!user) {
      navigate('/Auth', { replace: true });
    }
  }, [user, navigate])

  //Método Callback que realiza el envió del prompt desde el Hijo al componente Padre
  const handlePromptChange = (newPrompt) => {
    setApp_main_section(newPrompt);
  }

  //Método Callback que realiza el envió del proyecto seleccionado desde el componente hijo
  const handlePromptProyecto = (setApp_main_section) => {
    setProyecto(setApp_main_section)
  }

  return(
    <main className='app-main'>
      <Menu onPromptChange={handlePromptChange} onPromptProyecto={handlePromptProyecto} />
      <section className={app_main_section}>
        <Header proyecto={proyecto} />
        <article className='app-main__section__tasks-panel'>
          <DndContext onDragEnd={handleDragEnd}>
            <section className='app-main__section__tasks-panel__section'>
              <div className='app-main__section__tasks__panel__section__content__titulo'>
                <h1 className='app-main__section__tasks__panel__section__titulo-New'>NUEVO</h1>
              </div>
              {
                tasksFirebase.map((taskFB) => (
                  <New id={`NUEVO${taskFB.idTask}`} key={taskFB.id}
                    droppedStates = {droppedStates[taskFB.idTask]}
                    idElement={taskFB.id}
                    titulo={taskFB.titulo}
                    responsable={taskFB.responsable}
                    estado={taskFB.estado}
                    esfuerzo={taskFB.esfuerzo}
                    descripcion={taskFB.descripcion}
                  />
                ))
              }
            </section>
            <section className='app-main__section__tasks-panel__section'>
              <div className='app-main__section__tasks__panel__section__content__titulo'>
                <h1 className='app-main__section__tasks__panel__section__titulo-Progreso'>EN PROGRESO</h1>
              </div>
              {
                tasksFirebase.map((taskFB) => (
                  <InProgress id={`EN PROGRESO${taskFB.idTask}`} key={taskFB.id}
                    droppedStates = {droppedStates[taskFB.idTask]}
                    idElement={taskFB.id}
                    titulo={taskFB.titulo}
                    responsable={taskFB.responsable}
                    estado={taskFB.estado}
                    esfuerzo={taskFB.esfuerzo}
                  />
                ))
              }
            </section>
            <section className='app-main__section__tasks-panel__section'>
              <div className='app-main__section__tasks__panel__section__content__titulo'>
                <h1 className='app-main__section__tasks__panel__section__titulo-Completo'>FINALIZADO</h1>
              </div>
              {
                tasksFirebase.map((taskFB) => (
                  <Complete id={`FINALIZADO${taskFB.idTask}`} key={taskFB.id}
                    droppedStates = {droppedStates[taskFB.idTask]}
                    idElement={taskFB.id}
                    titulo={taskFB.titulo}
                    responsable={taskFB.responsable}
                    estado={taskFB.estado}
                    esfuerzo={taskFB.esfuerzo}
                  />
                ))
              }
            </section>    
          </DndContext>
        </article>
      </section>
    </main>
  )

  function handleDragEnd(event) {
    var index = 0;
    var statusNuevo = 'NUEVO'
    var statusEnProceso = 'EN PROGRESO'
    var statusFinalizado = 'FINALIZADO'

    if (event.active.id.startsWith(statusNuevo)) {
        index = parseInt(event.active.id.replace(statusNuevo, ''), 10);
    } else if (event.active.id.startsWith(statusEnProceso)) {
        index = parseInt(event.active.id.replace(statusEnProceso, ''), 10);
    } else if (event.active.id.startsWith(statusFinalizado)) {
        index = parseInt(event.active.id.replace(statusFinalizado, ''), 10);
    }

    if (event.over) {
      const newDroppedStates = [...droppedStates]
      const newTasks = [...tasksFirebase]
      
      if(event.over.id.startsWith(statusEnProceso)) {
        newTasks[index].estado = statusEnProceso
        newDroppedStates[index] = statusEnProceso
      }
      else if(event.over.id.startsWith(statusFinalizado)) {
        newTasks[index].estado = statusFinalizado
        newDroppedStates[index] = statusFinalizado
      }
      else if(event.over.id.startsWith(statusNuevo)) {
        newTasks[index].estado = statusNuevo
        newDroppedStates[index] = statusNuevo
      }
      
      setDroppedStates(newDroppedStates)
    }
  }
}