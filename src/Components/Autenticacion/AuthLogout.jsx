import { AuthContext } from './UseAuth';
import { Dialog, Pane } from 'evergreen-ui';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../js/Auth/Authentications.js';

import '../../css/Auth/logout.css';

// eslint-disable-next-line react/prop-types
export function LogoutAuth({changeStatus}) {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(changeStatus);
    const { setUser, setEmailVerificated, setEmail } = useContext(AuthContext);

    const handlerLogout = () => {
        logout({setUser, setEmailVerificated, setEmail, setIsShown, navigate});
    }

    const handlerCancel = () => {
        setIsShown((prevState) => !prevState);
    }

    return(
        <Pane>
            <Dialog
              isShown={isShown}
              title='Cerrar sesión'
              hasFooter={false}
            >
              <article className='article-logout'>
                <p>¿Esta seguro de que deseas cerrar sesión?</p>

                <div className='article-logout-container'>
                    <button className='article-logout-button' onClick={handlerLogout}>Cerrar sesión</button>
                    <button className='article-logout-cancel' style={{padding: '10px'}} onClick={handlerCancel}>Cancelar</button>
                </div>
              </article>
            </Dialog>
        </Pane>
    )
}