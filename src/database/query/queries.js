// import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../conexion/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// Agregar una tarea
// export const addTask = async (task) => {
//   await addDoc(collection(db, "tasks"), task);
// };

// Leer todas las tareas
export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "task"));
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
