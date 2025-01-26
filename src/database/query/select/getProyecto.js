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

export const getProyectos = async (email) => {
  try {
    const proyectosQuery = query(
      collection(db, "Proyectos"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(proyectosQuery);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Msj: ', error);
  }
};
