/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getTasks } from '../../../js/database/queries/select/select';
import { deleteTask } from '../../../js/database/queries/delete/delete';
import { updateTaskID } from '../../../js/database/queries/update/update';

import '../../../css/Dialog/option.css';

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
      <article className='article-dialog'>
      <p>¿Estas seguro de que quieres eliminar la siguiente actividad?</p>
        <div className='dialog-proyecto__content'>
          <span className='content-span__title'>Actividad</span>
          <span className='content-span__dynamic_span'>{tituloActividad}</span>
        </div>

        <div className='dialog-proyecto__content'>
          <span className='content-span__title'>Estado</span>
          <span className='content-span__dynamic_span'>{estado}</span>
        </div>

        <div className='dialog-proyecto__content'>
          <span className='content-span__title'>Descripción</span>
          <p>{descripcion}</p>
        </div>

        <div className='dialog-button'>
          <button className='dialog-button-submit delete' type='submit'>Eliminar</button>
        </div>
      </article>
    </form>
  )
}