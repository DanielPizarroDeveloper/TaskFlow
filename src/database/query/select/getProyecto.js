import { db } from "../../conexion/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProyecto = async (proyectoFiltro) => {
    try {
        const getQuery = query(
            collection(db, "Proyectos"),
            where("nombreProyecto", "==", proyectoFiltro )
        );
    
        const querySnapshot = await getDocs(getQuery)
        return querySnapshot.docs.map((doc) => ({... doc.data(), id: doc.id }))
    } catch (error) {
        console.error('Msj: ', error)
    }
}

export const getProyectos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Proyectos"));
      return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.error('Msj: ', error)
    }
  }