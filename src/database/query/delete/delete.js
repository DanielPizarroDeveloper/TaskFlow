import { db } from "../../conexion/firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore"

export const deleteTask = async (IDTask) => {
    try {
        const taskDoc = doc(db, 'Proyectos/TaskFlow/taskNew', IDTask);
        await deleteDoc(taskDoc);
        return true;

    } catch (error) {
        console.log('Msj: ', error)
        return false;
    }
}