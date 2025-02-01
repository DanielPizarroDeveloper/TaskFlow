import { setDoc, doc } from "firebase/firestore";
import { db } from '../../conexion/firebaseConfig';
import { toaster } from "evergreen-ui";
import { NotificacionesProyecto } from '../../../notification/Notificaciones';

const successMsj = NotificacionesProyecto().success;
const dangerMsj = NotificacionesProyecto().danger;

export const createProject = async ({nombreProyecto, user, descripcionProyecto, email}) => {
    try {
        const docRef = doc(db, 'Proyectos', nombreProyecto);
        await setDoc(docRef, {
            nombreProyecto: nombreProyecto,
            responsableProyecto: user,
            descripcionProyecto: descripcionProyecto,
            email: email
        });

        toaster.success(successMsj[0], {
          description: successMsj[1],
        });

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        toaster.danger(dangerMsj[0], {
          description: dangerMsj[1],
        });
    }
};
