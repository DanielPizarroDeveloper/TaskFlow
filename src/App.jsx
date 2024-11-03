import { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { Menu } from './Components/ContentPage/menu'
import { New } from './Components/ContentPage/Tasks/new'
import { Complete } from './Components/ContentPage/Tasks/complete'
import { InProgress } from './Components/ContentPage/Tasks/inProgress'
import { Header } from './Components/ContentPage/header'

import { getTaskNew } from './database/query/select/getNewTasks'

import taskListProgreso from '../src/mocks/Progress/car.json'
import taskListFinalizado from '../src/mocks/Complete/card.json'

import './App.css'

function App() {
  const [proyecto, setProyecto] = useState(null)
  const [app_main_section, setApp_main_section] = useState('app-main__section')
  const [tasksFirebase, setTasksFirebase] = useState([])
  
  const [droppedStates, setDroppedStates] = useState(
    [
      ['new', null, null], 
      ['new', null, null], 
      ['new', null, null]
    ]
  )
  
  const tasksProgreso = taskListProgreso;
  const tasksFinalizado = taskListFinalizado;
  
  useEffect(() => {
    const fetchGetProyecto = async () => {
      const newTask = await getTaskNew({proyecto: proyecto, estado: 'NUEVO'})
      setTasksFirebase(newTask)
    }
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
                  <New id={`new${taskFB.arrayNumber}`} key={taskFB.id}
                    droppedStates = {droppedStates[taskFB.arrayNumber][taskFB.positionArray]}
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
                tasksProgreso.map(({idElement, array, posicion, titulo, responsable, estado, esfuerzo}) => {
                  return(
                    <InProgress id={`inProgress${array}`} key={idElement}
                      droppedStates = {droppedStates[array][posicion]}
                      idElement={idElement}
                      titulo={titulo}
                      responsable={responsable}
                      estado={estado}
                      esfuerzo={esfuerzo}
                    />
                  )
                })
              }
            </section>

            <section className='app-main__section__tasks-panel__section'>
              <div className='app-main__section__tasks__panel__section__content__titulo'>
                <h1 className='app-main__section__tasks__panel__section__titulo-Completo'>FINALIZADO</h1>
              </div>
              {
                tasksFinalizado.map(({idElement, array, posicion, titulo, responsable, estado, esfuerzo}) => {
                  return (
                    <Complete id={`complete${array}`} key={idElement}
                      droppedStates = {droppedStates[array][posicion]}
                      idElement={idElement}
                      titulo={titulo}
                      responsable={responsable}
                      estado={estado}
                      esfuerzo={esfuerzo}
                    />
                  )
                })
              }
            </section>    
          </DndContext>
        </article>
      </section>
    </main>
  )

  function handleDragEnd(event) {
    var index = 0;

    if (event.active.id.startsWith('new')) {
        index = parseInt(event.active.id.replace('new', ''), 10);
    } else if (event.active.id.startsWith('inProgress')) {
        index = parseInt(event.active.id.replace('inProgress', ''), 10);
    } else if (event.active.id.startsWith('complete')) {
        index = parseInt(event.active.id.replace('complete', ''), 10);
    }

    if (event.over) {
        const newStates = [...droppedStates];


        newStates[index] = [null, null, null];

        if (event.over.id.startsWith('inProgress')) {
          newStates[index][1] = 'inProgress';
          newStates[index][2] = null;
        }

        else if (event.over.id.startsWith('complete')) {
          newStates[index][1] = null
          newStates[index][2] = 'complete';
        }

        else if (event.over.id.startsWith('new')) {
            newStates[index][0] = 'new';
            newStates[index][1] = null;
            newStates[index][2] = null;
        }

        setDroppedStates(newStates);
    }
  }
}

export default App