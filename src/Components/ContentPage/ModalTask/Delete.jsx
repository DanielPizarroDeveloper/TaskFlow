/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getTasks } from '../../../js/database/queries/select/select.js';
import { deleteTask } from '../../../js/database/queries/delete/delete.js';
import { updateTaskID } from '../../../js/database/queries/update/update.js';

import '../../../css/ModalTask/Task/Eliminar.css';

export function Delete({taskID, ID, proyecto, tituloActividad, estado, descripcion, callbackFunction, deleteTaskSelected, onActivate}) {
  const [IDTask] = useState(ID);

  const handler_Delete_Task = async () => {
    onActivate();
    const returnDelete = deleteTask(IDTask, proyecto);
    
    if(returnDelete) {
      const getTasksAll = await getTasks({proyecto: proyecto})
      const sortedTasks = getTasksAll.sort((a, b) => a.idTask - b.idTask)
      updateTaskID(sortedTasks, taskID, proyecto)
      deleteTaskSelected((prevState) => !prevState);

      setTimeout(() => { 
        callbackFunction(true);
      }, 1500);
    }
  }

  return (
    <form onSubmit={handler_Delete_Task}>
      <article className='article-pane-eliminar'>
        <p>¿Estas seguro de que quieres eliminar la siguiente actividad?</p>
        <div className='pane-content'>
          <p style={{color: '#0f95cd'}}><strong>Actividad:</strong></p>
          <p>{tituloActividad}</p>
        </div>
        <div className='pane-content'>
          <p style={{color: '#0f95cd'}}><strong>Estado:</strong></p>
          <p>{estado}</p>
        </div>
        <div className='pane-content-description'>
          <p style={{color: '#0f95cd'}}><strong>Descripción</strong></p>
          <p>{descripcion}</p>
        </div>
        <div>
          <button className='pane-content-submit__delete' type='submit'>Eliminar</button>
        </div>
      </article>
    </form>
  )
}