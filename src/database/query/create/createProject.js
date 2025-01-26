import { setDoc, doc } from "firebase/firestore";
import { db } from '../../conexion/firebaseConfig';

export const createProject = async ({nombreProyecto, user, descripcionProyecto, email}) => {
    try {
        const docRef = doc(db, 'Proyectos', nombreProyecto);
        await setDoc(docRef, {
            nombreProyecto: nombreProyecto,
            responsableProyecto: user,
            descripcionProyecto: descripcionProyecto,
            email: email
        });
    } catch (error) {
        console.error('Mensajes de error: ', error);
    }
};
