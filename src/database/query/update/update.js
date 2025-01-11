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