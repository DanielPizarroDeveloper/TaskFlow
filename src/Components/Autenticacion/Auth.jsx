import { auth } from '../../database/conexion/firebaseConfig'
import { UseAuth } from './UseAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence, signInWithEmailAndPassword } from 'firebase/auth'

import '../../css/Auth/Auth.css'

export function Auth() {
    //Usuario - Contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Google Sesión
    const { user, setUser, emailVerificated, setEmailVerificated } = UseAuth();
    const navigate = useNavigate();

    
    useEffect(() => {
      if (!user) {
        navigate('/Authorize', { replace: true });
      }
      else if (user && !emailVerificated) {
        navigate('/Verify-email', { replace: true });
      }
      else {
        navigate('/', { replace: true });
      }
    }, [user, navigate]);

    const handlerSignIn = (e) => {
      // e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          user.reload().then(() => {
            if (user.emailVerified) {
              navigate('/', { replace: true });
              e.pre
            } else {
              navigate('/Verify-email', { replace: true });
            }
          });
        })
        .catch((error) => {
          console.log('Error en el inicio de sesión: ', error.message);
        })
    }

    const handlerRedirect = () => {
      navigate('/CreateAccount', { replace: true });
    }

    //Google Sesión
    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await setPersistence(auth, browserLocalPersistence);

        const result = await signInWithPopup(auth, provider)
            setUser(result.user.displayName)
            setEmailVerificated(result.user.emailVerified)
      } catch (error) {
        console.error("Error en el inicio de sesión con Google", error.message);
      }
    }

    return(
        <article className='article-auth'>
          <img style={{width: '280px', aspectRatio: '1:1'}} src="public\img\Logo.png" alt="Logo" />
          <form onSubmit={handlerSignIn}>
            <div className='article-auth__signIn__content'>
                <input className='article-auth__signIn__content__input' type="email" placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)}/>
                <input className='article-auth__signIn__content__input' type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                <button className='article-auth__signIn__content__input-submit'>Iniciar Sesión</button>
                <span style={{color: 'black'}}>¿No tienes una cuenta?, <a style={{color: '#0f95cd', cursor:'pointer'}} onClick={handlerRedirect}><strong>Registrate aquí</strong></a></span>
            </div>
          </form>
            
          <div className='article-auth__content'>
            <div className='article-auth__content-space'></div>
            <div>
                <span className='article-auth__content-span'>o</span>
            </div>
            <div className='article-auth__content-space'></div>
          </div>
            
          <div className='article-auth__signIn'>
              <button className='article-auth__signIn-option' onClick={handleGoogleSignIn}>
                  <img className='article-auth__logo' src="public\svg\Auth\google.svg" alt="Logo de google para inicio de sesión" />
                  <span className='article-auth__signIn-span'>Continuar con Google</span>
              </button>
          
              <button className='article-auth__signIn-option'>
                  <img className='article-auth__logo' src="public\svg\Auth\Microsoft.svg" alt="Logo de google para inicio de sesión" />
                  <span className='article-auth__signIn-span'>Continuar con una cuenta de Microsoft</span>
              </button>
          </div>
        </article>
    )
}