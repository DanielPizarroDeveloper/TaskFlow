import { toaster } from 'evergreen-ui';
import { db } from '../../conection/conn';
import { doc, deleteDoc } from 'firebase/firestore';
import { NotificacionesTareas, NotificacionesProyecto } from '../../../../notification/Notificaciones';

const successMsj = NotificacionesTareas().successDelete;
const dangerMsj = NotificacionesTareas().dangerDelete;

const successDeleteMsj = NotificacionesProyecto().successDelete;
const dangerDeleteMsj = NotificacionesProyecto().dangerDelete;

//DELETE - PROYECTOS
export const deleteProject = async (proyecto) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}`);
        await deleteDoc(taskDoc);

        toaster.success(successDeleteMsj[0], {
          description: successDeleteMsj[1],
        });

    } catch (error) {
        toaster.danger(dangerDeleteMsj[0], {
            description: dangerDeleteMsj[1],
        });

        console.error(error);
    }
}

//DELETE - TAREAS
export const deleteTask = async (IDTask, proyecto) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, IDTask);
        await deleteDoc(taskDoc);

        toaster.success(successMsj[0], {
          description: successMsj[1],
        });

        return true;

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        toaster.danger(dangerMsj[0], {
            description: dangerMsj[1],
        });
        return false;
    }
}