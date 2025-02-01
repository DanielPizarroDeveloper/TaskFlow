import { toaster } from "evergreen-ui";
import { auth } from "../database/conexion/firebaseConfig";
import { NotificacionesUsuario } from "../notification/Notificaciones";
import { browserLocalPersistence, setPersistence, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const dangerMsj = NotificacionesUsuario().dangerGoogle;
const dangerAccountMsj = NotificacionesUsuario().dangerAccount;

export const signInGoogle = async ({setUser, setEmailVerificated}) => {
  const provider = new GoogleAuthProvider();

    try {
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, provider)
          setUser(result.user.displayName);
          setEmailVerificated(result.user.emailVerified);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toaster.danger(dangerMsj[0], {
        description: dangerMsj[1]
      });
    }
}

export const signInAccount = ({auth, email, password, navigate}) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
  
      user.reload().then(() => {
        if (user.emailVerified) {
          navigate('/', { replace: true });
        } else {
          navigate('/Verify-email', { replace: true });
        }
      });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      toaster.danger(dangerAccountMsj[0], {
        description: dangerAccountMsj[1]
      });
    });
}