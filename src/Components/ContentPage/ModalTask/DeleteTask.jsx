/* eslint-disable react/prop-types */
import { Dialog, Pane } from "evergreen-ui"
import { useState } from "react"
import { deleteTask } from "../../../database/query/delete/delete"
import { updateTaskID } from "../../../database/query/update/update"
import { getTasks } from "../../../database/query/select/getTasks"

import '../../../css/ModalTask/Task/Eliminar.css'

export function DeleteTask({taskID, ID, proyecto, tituloActividad, color, estado, descripcion, isTalked, onActivate}) {
  const [isShown] = useState(isTalked)
  const [IDTask] = useState(ID)

  const handleClose = () => {
    onActivate();
  }

  const handler_Delete_Task = async () => {
    onActivate();
    const returnDelete = deleteTask(IDTask);
    
    if(returnDelete) {
      const getTasksAll = await getTasks({proyecto: proyecto})
      const sortedTasks = getTasksAll.sort((a, b) => a.idTask - b.idTask)
      updateTaskID(sortedTasks, taskID)
    }
  }

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Eliminar Actividad"
        intent="danger"
        confirmLabel="Eliminar"
        onCloseComplete={handleClose}
        onCancel={handleClose}
        hasCancel={false}
        onConfirm={handler_Delete_Task}
      >
        <article className="article-pane-eliminar">
          <p>¿Estas seguro de que quieres eliminar la siguiente actividad?</p>
          <div className="pane-content">
            <p style={{color: color}}><strong>Actividad:</strong></p>
            <p>{tituloActividad}</p>
          </div>
          <div className="pane-content">
            <p style={{color: color}}><strong>Estado:</strong></p>
            <p>{estado}</p>
          </div>
          <div className="pane-content-description">
            <p style={{color: color}}><strong>Descripción</strong></p>
            <p>{descripcion}</p>
          </div>
        </article>
      </Dialog>
    </Pane>
  )
}