import { toaster } from 'evergreen-ui';
import { auth } from '../database/conection/conn';
import { NotificacionesUsuario } from '../../notification/Notificaciones';
import { browserLocalPersistence, setPersistence, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const dangerMsj = NotificacionesUsuario().dangerGoogle;
const dangerAccountMsj = NotificacionesUsuario().dangerAccount;

//Google
export const signInGoogle = async ({setUser, setEmailVerificated}) => {
  const provider = new GoogleAuthProvider();

    try {
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, provider)
          setUser(result.user.displayName);
          setEmailVerificated(result.user.emailVerified);
    } catch (error) {
      toaster.danger(dangerMsj[0], {
        description: dangerMsj[1]
      });
      console.error(error);
    }
}

//Accounts
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
    .catch((error) => {
      toaster.danger(dangerAccountMsj[0], {
        description: dangerAccountMsj[1]
      });
      console.error(error);
    });
}

//Cierre Sesión
export const logout = ({setUser, setEmailVerificated, setEmail, setIsShown, navigate}) => {
  signOut(auth)
    .then(() => {
        setUser(null);
        setEmailVerificated(false);
        setEmail(null);
        setIsShown(false);
        navigate('/Authorize', { replace: true });
    })
    .catch((error) => {
        console.error('Error del cierre de sesión. ', error)
    })
}