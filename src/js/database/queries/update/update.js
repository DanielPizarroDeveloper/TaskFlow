import { toaster } from 'evergreen-ui';
import { db } from '../../conection/conn';
import { updateDoc, doc } from 'firebase/firestore';
import { NotificacionesProyecto } from '../../../../notification/Notificaciones';

const successUpdateMsjProyecto = NotificacionesProyecto().successUpdate;
const dangerUpdateMsjProyecto = NotificacionesProyecto().dangerUpdate;

//UPDATE - PROYECTOS
export const updateProyecto = async ({proyectoSeleccioando, descripcion}) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyectoSeleccioando}`)
        await updateDoc(taskDoc, {
            descripcionProyecto: descripcion
        });

        toaster.success(successUpdateMsjProyecto[0], {
            description: successUpdateMsjProyecto[1],
        });

        return true;
    } catch (error) {
        toaster.danger(dangerUpdateMsjProyecto[0], {
            description: dangerUpdateMsjProyecto[1],
        });

        console.error('Msj: ', error);

        return false;
    }
}

//UPDATE - TAREAS
export const updateTask = async ({idElement, estado, proyecto}) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, idElement)
        await updateDoc(taskDoc, {estado: estado})
    } catch (error) {
        console.error('Msj: ', error)
    }
}

//ACTUALIZACIÓN DE LOS ID
export const updateTaskID = async (ArrayTask, taskID, proyecto) => {
    try {
        ArrayTask.forEach(element => {
            if (element.idTask > taskID) {
                let newID = element.idTask - 1;
                const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, element.id)
                updateDoc(taskDoc, {idTask: newID})
            }
        });
    } catch (error) {
        console.log('Msj: ', error)
    }
}