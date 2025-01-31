import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../conexion/firebaseConfig';
import { toaster } from 'evergreen-ui';
import { NotificacionesTareas } from '../../../notification/Notificaciones'

const successMsj = NotificacionesTareas().success;
const dangerMsj = NotificacionesTareas().danger;

export const createTask = async({titulo, responsable, estado, esfuerzo, taskID, proyectoSeleccioando, descripcion}) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const docRef = await addDoc(collection(db, `Proyectos/${proyectoSeleccioando}/tasks`), {
            titulo: titulo,
            responsable: responsable,
            estado: estado,
            esfuerzo: esfuerzo,
            idTask: taskID,
            proyecto: proyectoSeleccioando,
            descripcion: descripcion
        })

        toaster.success(successMsj[0], {
          description: successMsj[1],
        });

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        toaster.danger(dangerMsj[0], {
            description: dangerMsj[1],
        });
    }
}