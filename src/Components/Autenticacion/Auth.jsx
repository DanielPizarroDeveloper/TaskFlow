import { auth } from '../../database/conexion/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { UseAuth } from './UseAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import '../../css/Auth/Auth.css'

export function Auth() {
    const { user, setUser, setEmailVerificated } = UseAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if (user) {
        navigate('/', { replace: true });
      }
    }, [user, navigate]);

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
            <h1 className='article-auth__titulo'>Welcome!</h1>
            <div className='article-auth__signIn__content'>
                <input className='article-auth__signIn__content__input' type="email" placeholder="Correo"/>
                <input className='article-auth__signIn__content__input' type="password" placeholder="Contraseña" />
                <button className='article-auth__signIn__content__input-submit'>Iniciar Sesión</button>
            </div>
            
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