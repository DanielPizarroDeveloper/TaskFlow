import { UseAuth } from './UseAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../js/database/conection/conn.js';
import { signInGoogle, signInAccount } from '../../js/Auth/Authentications.js';

import '../../css/Auth/Auth.css';

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
    }, [user, navigate, emailVerificated]);

    const handlerSignIn = (e) => {
      e.preventDefault();
      signInAccount({auth, email, password, navigate});
    }

    const handlerRedirect = () => {
      navigate('/CreateAccount', { replace: true });
    }

    //Google Sesión
    const handleGoogleSignIn = async () => {
      signInGoogle({setUser, setEmailVerificated});
    }

    return(
      <article className='article-auth'>
        <img className='article-auth-img' src='public\img\Logo.png' alt='Logo' />
        <form onSubmit={handlerSignIn}>
          <div className='article-auth__signIn__content'>
              <input className='article-auth__signIn__content__input' type='email' placeholder='Correo electronico' onChange={(e) => setEmail(e.target.value)}/>
              <input className='article-auth__signIn__content__input' type='password' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
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
          
        <div className='article-auth__signIn__content'>
          <button className='article-auth__signIn-option' onClick={handleGoogleSignIn}>
              <img className='article-auth__logo' src='public\svg\Auth\google.svg' alt='Logo de google para inicio de sesión' />
              <span className='article-auth__signIn-span'>Continuar con Google</span>
          </button>
        </div>
      </article>
    )
}