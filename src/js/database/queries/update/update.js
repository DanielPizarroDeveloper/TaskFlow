import { db } from '../../conection/conn.js';
import { updateDoc, doc } from 'firebase/firestore'

//UPDATE - PROYECTOS

//UPDATE - TAREAS
export const updateTask = async ({idElement, estado, proyecto}) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, idElement)
        await updateDoc(taskDoc, {estado: estado})
    } catch (error) {
        console.error('Msj: ', error)
    }
}

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