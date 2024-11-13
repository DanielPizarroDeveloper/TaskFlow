import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../conexion/firebaseConfig';

export const createTask = async({titulo, responsable, estado, esfuerzo, taskID, proyectoSeleccioando, descripcion}) => {
    const docRef = await addDoc(collection(db, 'Proyectos/TaskFlow/taskNew'), {
        titulo: titulo,
        responsable: responsable,
        estado: estado,
        esfuerzo: esfuerzo,
        idTask: taskID,
        proyecto: proyectoSeleccioando,
        descripcion: descripcion
    })
}