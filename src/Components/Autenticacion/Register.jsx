import { useState } from 'react';
import { app } from '../../database/conexion/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function RegisterAccount () {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: userName
                });

                sendEmailVerification(user)
                .then(() => {
                    console.log('Correo de verificación enviado.')
                    navigate('/Verify-email', { replace: true });
                })
                .catch((error) => {
                    console.log('Error al enviar un correo de verificación.')
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error en el registro: ', errorCode, errorMessage);
            })
    }

    return (
        <article className='article-auth'>
            <img style={{width: '280px', aspectRatio: '1:1'}} src="public\img\Logo.png" alt="Logo" />
            <form onSubmit={handlerSignUp}>
              <div className='article-auth__signIn__content'>
              <input className='article-auth__signIn__content__input' type="text" placeholder="Nombre Usuario" onChange={(e) => setUserName(e.target.value)} />
                    <input className='article-auth__signIn__content__input' type="email" placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)} />
                    <input className='article-auth__signIn__content__input' type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <button className='article-auth__signIn__content__input-submit'>Crear Cuenta</button>
            </form>
        </article>
    )
}