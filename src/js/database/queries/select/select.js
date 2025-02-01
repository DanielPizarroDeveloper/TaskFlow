import { db } from '../../conection/conn.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

//SELECT - PROYECTOS
export const getProyecto = async (proyectoFiltro) => {
    try {
        const getQuery = query(
            collection(db, 'Proyectos'),
            where('nombreProyecto', '==', proyectoFiltro )
        );
    
        const querySnapshot = await getDocs(getQuery)
        return querySnapshot.docs.map((doc) => ({... doc.data(), id: doc.id }))
    } catch (error) {
        console.error('Msj: ', error)
    }
}

export const getProyectos = async (email) => {
  try {
    const proyectosQuery = query(
      collection(db, 'Proyectos'),
      where('email', '==', email)
    );
    const querySnapshot = await getDocs(proyectosQuery);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Msj: ', error);
  }
};


//SELECT - TAREAS DE PROYECTOS
export const getTasks = async ({proyecto}) => {
    try {
        const getQuery = query(
            collection(db, `Proyectos/${proyecto}/tasks`),
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
            collection(db, `Proyectos/${proyectoSeleccioando}/tasks`),
            where('proyecto', '==', proyectoSeleccioando)
        )
    
        const taskSnapshot = await getDocs(getQuery)
        return taskSnapshot.size
    } catch (error) {
        console.error('Msj: ', error)
    }
}