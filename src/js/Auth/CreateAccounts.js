import { toaster } from 'evergreen-ui';
import { NotificacionesCreacionCuenta } from '../../notification/Notificaciones';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const warningMsj = NotificacionesCreacionCuenta().warningAccount;
const dangerMsj = NotificacionesCreacionCuenta().dangerAccount;

export const createAccount = ({auth, userName, email, password, navigate}) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: userName
            });

            sendEmailVerification(user)
            .then(() => {
                navigate('/Verify-email', { replace: true });
            })
            .catch((error) => {
                console.log('Error al enviar un correo de verificación.', error.message);
            })
        })
        .catch((error) => {
            var msjError = error.code;
            if(msjError.includes('email-already-in-use')) {
                toaster.warning(warningMsj[0], {
                  description: warningMsj[1]
                });
            }
            else {
                toaster.danger(dangerMsj[0], {
                  description: dangerMsj[1]
                });
            }
        })
}