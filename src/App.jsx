import { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { Menu } from './Components/ContentPage/menu'
import { New } from './Components/ContentPage/Tasks/new'
import { Complete } from './Components/ContentPage/Tasks/complete'
import { InProgress } from './Components/ContentPage/Tasks/inProgress'
import { Header } from './Components/ContentPage/header'

import { getTasks } from './database/query/select/getTasks'

import './App.css'

function App() {
  const [proyecto, setProyecto] = useState(null)
  const [app_main_section, setApp_main_section] = useState('app-main__section')
  const [tasksFirebase, setTasksFirebase] = useState([])
  const [droppedStates, setDroppedStates] = useState([null])
  
  //Obtenemos los estados de las tareas respectivas, cuando se cambie el proyecto seleccionado
  //Obtenemos las tareas del proyecto respectivo, actualizando las tareas cuando se cambie el proyecto seleccionado
  useEffect(() => {
    const fetchGetProyecto = async () => {
      const newTask = await getTasks({proyecto: proyecto})
      setTasksFirebase(newTask)
    }

    const getEstadoTask = async () => {
      const element = await getTasks({proyecto: proyecto})
      const result = element.map(item => item.estado)
      setDroppedStates(result)
    }

    getEstadoTask()
    fetchGetProyecto()
  }, [proyecto])

  //Método Callback que realiza el envió del prompt desde el Hijo al componente Padre
  const handlePromptChange = (newPrompt) => {
    setApp_main_section(newPrompt);
  }

  //Método Callback que realiza el envió del proyecto seleccionado desde el componente hijo
  const handlePromptProyecto = (proyectoPrompt) => {
    setProyecto(proyectoPrompt)
  }

  return (
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

      if(event.over.id.startsWith(statusEnProceso)) {
        newDroppedStates[index] = statusEnProceso
      }
      else if(event.over.id.startsWith(statusFinalizado)) {
        newDroppedStates[index] = statusFinalizado
      }
      else if(event.over.id.startsWith(statusNuevo)) {
        newDroppedStates[index] = statusNuevo
      }
      
      setDroppedStates(newDroppedStates)
    }
  }
}

export default App