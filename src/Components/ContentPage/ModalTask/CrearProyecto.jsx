import { useState } from 'react'
import { Dialog, Pane } from "evergreen-ui"
import { UseAuth } from '../../Autenticacion/UseAuth';

import '../../../css/ModalTask/Proyecto/Crear.css';

// eslint-disable-next-line react/prop-types
export function CrearProyecto ({changeStatus}) {
    const { user } = UseAuth();
    const [isShown, setIsShown] = useState(changeStatus);
      
    return (
      <Pane>
        <Dialog
          isShown={isShown}
          title='Creación de un proyecto'
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Crear"
          hasCancel={false}
          hasFooter={false}
        >
            <form method='POST'>
              <article className='article-modal-create'>
                <div className='modal-create-nombre__proyecto'>
                  <span className='modal-create__span'>Nombre Proyecto: </span>
                  <input style={{width: '320px', borderRadius: '5px', height:'25px'}} name='titulo' type='text' placeholder='Nombre de la actividad' />
                </div>

                <div className='modal-create-nombre__proyecto'>
                  <span className='modal-create__span'>Responsable: </span>
                  <input style={{width: '320px', borderRadius: '5px', height:'25px'}} name='titulo' type='text' value={user} disabled={true} />
                </div>

                <div className='article-modal-create__content__descripcion'>
                  <span className='modal-create__span'>Descripción: </span>
                  <textarea className='article-modal-create__content__text-area' name='descripcion' placeholder='Descripción de la actividad...'></textarea>
                </div>

                <div className='article-modal-create__content__submit'>
                  <button className='article-modal-create__content__button' type='submit'>Enviar</button>
                </div>
              </article>
            </form>
        </Dialog>
      </Pane>
    )
}