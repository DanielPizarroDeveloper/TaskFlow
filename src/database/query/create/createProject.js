import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../conexion/firebaseConfig';

export const createProject = async({nombreProyecto, user, descripcionProyecto}) => {
    try {
        const docRef = await addDoc(collection(db, 'Proyectos'), {
            nombreProyecto: nombreProyecto,
            responsableProyecto: user,
            descripcionProyecto: descripcionProyecto
        })
    } catch (error) {
        console.error('Mensajes de error, ', error)
    }
}