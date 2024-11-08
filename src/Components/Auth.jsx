import '../css/Auth/Auth.css'

import { auth } from '../database/conexion/firebaseConfig'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export function Auth() {
    //Pruebas de Inicio de sesión con Google.
    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert("Inicio de sesión con Google exitoso");
      } catch (error) {
        console.error("Error en el inicio de sesión con Google", error.message);
      }
    }

    return(
        <article className='article-auth'>
            <h1 style={{color: 'red'}}>Bienvenidos</h1>
            <div className='article-auth__signIn__content'>
                <input className='article-auth__signIn__content__input' type="email" placeholder="Correo"/>
                <input className='article-auth__signIn__content__input' type="password" placeholder="Contraseña" />
                <button className='article-auth__signIn__content__input-submit'>Iniciar Sesión</button>
            </div>
            <div>
                <span style={{color: 'black'}}>----------- o -----------</span>
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