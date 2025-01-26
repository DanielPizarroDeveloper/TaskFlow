import { useNavigate } from 'react-router-dom';
import '../../css/Auth/verifyEmail.css';

export function VerifyEmail() {
    const navigate = useNavigate();

    const handlerRedirect = () => {
        navigate('/Authorize', { replace: true });
    }

    return(
        <article className='article-verify'>
            <img className='auth-image' src="public\img\Logo.png" alt="Logo" />
            <div className='article-verify-content-span'>
                <h4 style={{color: 'black'}}>Se ha enviado un correo para realizar la verificación de su cuenta</h4>
            </div>
            <button className='article-auth__signIn__content__input-submit' onClick={handlerRedirect}>Volver</button>
        </article>
    )
}