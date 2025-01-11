//Conexión de la base de datos
import { db } from "../../conexion/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";

// Leer todas las tareas
export const getProyectos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Proyectos"));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('Msj: ', error)
  }
}