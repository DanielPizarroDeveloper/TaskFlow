import { db } from "../../conexion/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { NotificacionesTareas } from '../../../notification/Notificaciones'
import { toaster } from "evergreen-ui";

const successMsj = NotificacionesTareas().successDelete;
const dangerMsj = NotificacionesTareas().dangerDelete;

export const deleteTask = async (IDTask, proyecto) => {
    try {
        const taskDoc = doc(db, `Proyectos/${proyecto}/tasks`, IDTask);
        await deleteDoc(taskDoc);

        toaster.success(successMsj[0], {
          description: successMsj[1],
        });

        return true;

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
        toaster.danger(dangerMsj[0], {
            description: dangerMsj[1],
        });
        return false;
    }
}