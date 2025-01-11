import { db } from "../../conexion/firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore"

export const deleteTask = async (IDTask) => {
    console.log(IDTask)
    try {
        const taskDoc = doc(db, 'Proyectos/TaskFlow/taskNew', IDTask);
        await deleteDoc(taskDoc);
    } catch (error) {
        console.log(error)
    }
}