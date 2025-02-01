import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../js/database/conection/conn.js';
import { createAccount } from '../../js/Auth/CreateAccounts.js';

export function RegisterAccount () {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSignUp = (e) => {
        e.preventDefault();
        createAccount({auth, userName, email, password, navigate});
    }

    return (
        <article className='article-auth'>
            <img style={{width: '280px', aspectRatio: '1:1'}} src='public\img\Logo.png' alt='Logo' />
            <form onSubmit={handlerSignUp}>
              <div className='article-auth__signIn__content'>
              <input className='article-auth__signIn__content__input' type='text' placeholder='Nombre Usuario' onChange={(e) => setUserName(e.target.value)} />
                    <input className='article-auth__signIn__content__input' type='email' placeholder='Correo electronico' onChange={(e) => setEmail(e.target.value)} />
                    <input className='article-auth__signIn__content__input' type='password' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <button className='article-auth__signIn__content__input-submit'>Crear Cuenta</button>
            </form>
        </article>
    )
}