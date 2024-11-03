import { db } from '../../conexion/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const getTaskNew = async ({proyecto, estado}) => {
    const getQuery = query(
        collection(db, 'Proyectos/TaskFlow/taskNew'),
        where('proyecto', '==', proyecto),
        where('estado', '==', estado)
    )

    const querySnapshot = await getDocs(getQuery)
    return querySnapshot.docs.map((doc) => ({... doc.data(), id: doc.id}))
}