import { signOut } from 'firebase/auth';
import { AuthContext } from './UseAuth';
import { Dialog, Pane } from 'evergreen-ui';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../js/database/conection/conn.js';

// eslint-disable-next-line react/prop-types
export function LogoutAuth({changeStatus}) {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(changeStatus);
    const { setUser, setEmailVerificated, setEmail } = useContext(AuthContext);

    const handlerLogout = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setEmailVerificated(false);
            setEmail(null);
            setIsShown(false);
            navigate('/Authorize', { replace: true });
        })
        .catch((error) => {
            console.log('Error del cierre de sesión. ', error)
        })
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
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p>¿Esta seguro de que deseas cerrar sesión?</p>

                <div style={{display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '30px'}}>
                    <button className='pane-content-submit__delete' style={{padding: '10px', backgroundColor: '#0F95CD'}} onClick={handlerLogout}>Cerrar sesión</button>
                    <button className='pane-content-submit__delete' style={{padding: '10px'}} onClick={handlerCancel}>Cancelar</button>
                </div>
              </div>
            </Dialog>
        </Pane>
    )
}