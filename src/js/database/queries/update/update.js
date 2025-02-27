import { toaster } from 'evergreen-ui';
import { db } from '../../conection/conn';
import { updateDoc, doc } from 'firebase/firestore';
import { NotificacionesProyecto, NotificacionesTareas } from '../../../../notification/Notificaciones';

const successUpdateMsjProyecto = NotificacionesProyecto().successUpdate;
const dangerUpdateMsjProyecto = NotificacionesProyecto().dangerUpdate;

const successUpdateMsjTarea = NotificacionesTareas().successUpdate;

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
export const updateTask = async ({idElement, proyecto, titulo, estado, esfuerzo, descripcion, flag}) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, idElement)
        await updateDoc(taskDoc, {
            titulo: titulo,
            estado: estado,
            esfuerzo: esfuerzo,
            descripcion: descripcion
        });

        //Esta notificación va a salir, solamente cuando el usuario actualice valores de una tarea, desde las opciones.
        //No saltara cuando se haga un drop/drag de la actividad entre estados.
        if(flag) {
            toaster.success(successUpdateMsjTarea[0], {
                description: successUpdateMsjTarea[1],
            });
        }
    } catch (error) {
        console.error('Msj: ', error);
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
        console.log('Msj: ', error);
    }
}