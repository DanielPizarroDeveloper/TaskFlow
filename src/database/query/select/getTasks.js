import { db } from '../../conexion/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getTasks = async ({proyecto}) => {
    try {
        const getQuery = query(
            collection(db, 'Proyectos/TaskFlow/taskNew'),
            where('proyecto', '==', proyecto)
        )
    
        const querySnapshot = await getDocs(getQuery)
        return querySnapshot.docs.map((doc) => ({... doc.data(), id: doc.id}))
    } catch (error) {
        console.error('Msj: ', error)
    }
}

export const getNumberTasks = async ({proyectoSeleccioando}) => {
    try {
        const getQuery = query(
            collection(db, 'Proyectos/TaskFlow/taskNew'),
            where("proyecto", "==", proyectoSeleccioando)
        )
    
        const taskSnapshot = await getDocs(getQuery)
        return taskSnapshot.size
    } catch (error) {
        console.error('Msj: ', error)
    }
}