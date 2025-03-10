import { toaster } from 'evergreen-ui';
import { db } from '../../conection/conn';
import { getProyecto } from '../select/select';
import { setDoc, doc, addDoc, collection } from 'firebase/firestore';
import { NotificacionesProyecto, NotificacionesTareas } from '../../../../notification/Notificaciones';

const successMsjProyecto = NotificacionesProyecto().success;
const warningMsjProyecto = NotificacionesProyecto().warning;
const dangerMsjProyecto = NotificacionesProyecto().danger;

const successMsjTarea = NotificacionesTareas().success;
const dangerMsjTarea = NotificacionesTareas().danger;

//CREATE - PROYECTOS
export const createProject = async ({nombreProyecto, user, descripcionProyecto, email}) => {
    try {
        let check = await getProyecto(nombreProyecto);
        
        if (check.length === 0) {
            const docRef = doc(db, 'Proyectos', nombreProyecto);
            await setDoc(docRef, {
                nombreProyecto: nombreProyecto,
                responsableProyecto: user,
                descripcionProyecto: descripcionProyecto,
                email: email
            });
            
            toaster.success(successMsjProyecto[0], {
              description: successMsjProyecto[1],
            });
        }
        else {
            toaster.warning(warningMsjProyecto[0], {
              description: warningMsjProyecto[1],
            });
        }
    } catch (error) {
        toaster.danger(dangerMsjProyecto[0], {
          description: dangerMsjProyecto[1],
        });

        console.error(error);
    }
};

//CREATE - TAREAS
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

        toaster.success(successMsjTarea[0], {
          description: successMsjTarea[1],
        });
    } catch (error) {
        toaster.danger(dangerMsjTarea[0], {
            description: dangerMsjTarea[1],
        });
        console.error(error);
    }
}