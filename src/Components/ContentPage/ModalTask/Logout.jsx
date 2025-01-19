import { useState } from 'react'
import { Dialog, Pane } from 'evergreen-ui'
// import { logout } from '../../Autenticacion/AuthLogout';


export function Logout({changeStatus}) {
    const [isShown, setIsShown] = useState(changeStatus)
  
    return (
      <Pane>
        <Dialog
          isShown={isShown}
          title="Cerrar sesión"
          hasFooter={false}
        >
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>¿Esta seguro de que deseas cerrar sesión?</p>
            
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '30px'}}>
                <button className='pane-content-submit__delete' style={{padding: '10px', backgroundColor: '#0F95CD'}} onClick={logout}>Cerrar sesión</button>
                <button className='pane-content-submit__delete' style={{padding: '10px'}}>Cancelar</button>
            </div>
          </div>
        </Dialog>
      </Pane>
    )
}