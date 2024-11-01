//Conexión de la base de datos
import { db } from "../../conexion/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";

// Leer todas las tareas
export const getProyectos = async () => {
  const querySnapshot = await getDocs(collection(db, "Proyectos"));
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

// Actualizar una tarea
// export const updateTask = async (id, updatedTask) => {
//   const taskDoc = doc(db, "tasks", id);
//   await updateDoc(taskDoc, updatedTask);
// };

// Eliminar una tarea
// export const deleteTask = async (id) => {
//   const taskDoc = doc(db, "tasks", id);
//   await deleteDoc(taskDoc);
// };
