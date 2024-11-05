import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../conexion/firebaseConfig';

export const createTask = async({titulo, responsable, estado, esfuerzo, color, idTask, proyecto, descripcion}) => {
    const docRef = await addDoc(collection(db, 'Proyectos/TaskFlow/taskNew'), {
        titulo: titulo,
        responsable: responsable,
        estado: estado,
        esfuerzo: esfuerzo,
        color: color,
        idTask: idTask,
        proyecto: proyecto,
        descripcion: descripcion
    })
}