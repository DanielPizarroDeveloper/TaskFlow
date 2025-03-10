/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Dialog, Pane } from 'evergreen-ui';
import { UseAuth } from '../../Autenticacion/UseAuth';
import { createTask } from '../../../js/database/queries/create/create';
import { getNumberTasks } from '../../../js/database/queries/select/select';

import '../../../css/Dialog/task/create.css'

export function Crear ({changeStatus, proyectoSeleccioando, callbackFunction}) {
  const [titulo, setTitulo] = useState('');
  const [estado, setEstado] = useState('NUEVO');
  const [esfuerzo, setEsfuerzo] = useState('1');
  const [descripcion, setDescripcion] = useState('');
  const [taskID, setTaskID] = useState(0);
  const [isShown, setIsShown] = useState(changeStatus);
  const [responsable, setResponsable] = useState('');

  const { user } = UseAuth()

  useEffect(() => {
    const countTasks = async() => {
      const taskCount = await getNumberTasks({proyectoSeleccioando})
      setTaskID(taskCount);
    }
    countTasks();

    const loadUser = async() => {
      setResponsable(user);
    }
    
    loadUser()
  }, [proyectoSeleccioando, user])

  const handlerClick_New_Task= (event) => {
    event.preventDefault()
    switch (estado) {
      case 'NUEVO':
        setEstado('NUEVO')
        setDescripcion(descripcion)
      break;
      
      case 'EN PROGRESO':
        setEstado('EN PROGRESO')
        setDescripcion(descripcion)
      break
      
      case 'FINALIZADO':
        setEstado('FINALIZADO')
        setDescripcion(descripcion)
      break
    }

    setIsShown((prevState) => !prevState);
    createTask({ titulo, responsable, estado, esfuerzo, taskID, proyectoSeleccioando, descripcion });
    callbackFunction(true);
  }

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title='Creación nueva tarea'
        hasFooter={false}
      >
        <form onSubmit={handlerClick_New_Task} method='POST'>
          <article className='article-modal-create'>
            <div className='article-modal-create__content'>
              <span className='article-modal-create__content__span'>Título: </span>
              <input className='article-modal-create__content__input' name='titulo' type='text' placeholder='Nombre de la actividad' onChange={(e) => setTitulo(e.target.value)} />
            </div>

            <div className='article-modal-create__content'>
              <span className='article-modal-create__content__span'>Estado: </span>
              <select 
                id='estado' 
                name='estado'
                onChange={(e) => setEstado(e.target.value)}
                className='article-modal-create__content__input'
              >
                <option value='NUEVO'>NUEVO</option>
                <option value='EN PROGRESO'>EN PROGRESO</option>
                <option value='FINALIZADO'>FINALIZADO</option>
              </select>
            </div>

            <div className='article-modal-create__content'>
              <span className='article-modal-create__content__span'>Esfuerzo: </span>
              <select 
                id='esfuerzo' 
                name='esfuerzo'
                onChange={(e) => setEsfuerzo(e.target.value)}
                className='article-modal-create__content__input'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>
                
            <div className='article-modal-create__content__descripcion'>
              <span className='article-modal-create__content__span'>Descripción: </span>
              <textarea className='article-modal-create__content__text-area' name='descripcion' placeholder='Descripción de la actividad...' onChange={(e) => setDescripcion(e.target.value)}></textarea>
            </div>

            <div className='article-modal-create__content__submit'>
              <button className='article-modal-create__content__button' type='submit'>Enviar</button>
            </div>
          </article>
        </form>
      </Dialog>
    </Pane>
  )
}