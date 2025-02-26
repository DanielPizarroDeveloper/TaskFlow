import { useState } from 'react';
import { Dialog, Pane } from 'evergreen-ui';
import { UseAuth } from '../../Autenticacion/UseAuth';
import { createProject } from '../../../js/database/queries/create/create';

import '../../../css/ModalTask/Proyecto/Crear.css';

// eslint-disable-next-line react/prop-types
export function Crear ({changeStatus, callbackRefresh}) {
  const { user, email } = UseAuth();
  const [isShown, setIsShown] = useState(changeStatus);
  const [nombreProyecto, setNombreProyecto] = useState(null);
  const [descripcionProyecto, setDescripcionProyecto] = useState(null);

  const crearNuevoProyecto = async(event) => {
    event.preventDefault();
    createProject({nombreProyecto, user, descripcionProyecto, email});
    setIsShown((prevState) => !prevState);
    callbackRefresh((prevState) => !prevState);
  }

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title='Creación de un proyecto'
        onCloseComplete={() => setIsShown(false)}
        confirmLabel='Crear'
        hasCancel={false}
        hasFooter={false}
      >
        <form method='POST' onSubmit={crearNuevoProyecto}>
          <article className='article-modal-create-proyecto'>
            <div className='modal-create-nombre__proyecto'>
              <span className='modal-create__span'>Nombre Proyecto: </span>
              <input style={{width: '320px', borderRadius: '5px', height:'25px'}} onChange={(e) => setNombreProyecto(e.target.value)} name='nombreProyecto' type='text' placeholder='Nombre de la actividad' />
            </div>

            <div className='modal-create-nombre__proyecto'>
              <span className='modal-create__span'>Responsable: </span>
              <input style={{width: '320px', borderRadius: '5px', height:'25px'}} name='responsable' type='text' value={user} disabled={true} />
            </div>

            <div className='article-modal-create__content__descripcion'>
              <span className='modal-create__span'>Descripción: </span>
              <textarea className='article-modal-create__content__text-area' onChange={(e) => setDescripcionProyecto(e.target.value)} name='descripcionProyecto' placeholder='Descripción de la actividad...'></textarea>
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