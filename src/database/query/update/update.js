import { db } from "../../conexion/firebaseConfig"
import { updateDoc, doc } from "firebase/firestore"

export const updateTask = async ({idElement, estado}) => {
    try {
        const taskDoc = doc(db, 'Proyectos/TaskFlow/taskNew', idElement)
        await updateDoc(taskDoc, {estado: estado})
    } catch (error) {
        console.error('Msj: ', error)
    }
}

export const updateTaskID = async (ArrayTask, taskID) => {
    try {
        ArrayTask.forEach(element => {
            if (element.idTask > taskID) {
                let newID = element.idTask - 1;
                const taskDoc = doc(db, 'Proyectos/TaskFlow/taskNew', element.id)
                updateDoc(taskDoc, {idTask: newID})
            }
        });
    } catch (error) {
        console.log('Msj: ', error)
    }
}