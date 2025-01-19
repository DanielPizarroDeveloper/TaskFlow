import { signOut } from 'firebase/auth';
import { AuthContext } from './UseAuth';
import { Dialog, Pane } from 'evergreen-ui';
import { useContext, useState } from 'react';
import { auth } from '../../database/conexion/firebaseConfig'

export function LogoutAuth({changeStatus}) {
    const [isShown, setIsShown] = useState(changeStatus);
    const { setUser, setEmailVerificated } = useContext(AuthContext);1

    const handlerLogout = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setEmailVerificated(false);
            setIsShown(false);
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
              title="Cerrar sesión"
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