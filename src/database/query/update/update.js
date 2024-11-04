import { db } from "../../conexion/firebaseConfig"
import { updateDoc, doc } from "firebase/firestore"

// Actualizar una tarea
export const updateTask = async ({idElement, estado}) => {
    const taskDoc = doc(db, 'Proyectos/TaskFlow/taskNew', idElement)
    await updateDoc(taskDoc, {estado: estado})
}
