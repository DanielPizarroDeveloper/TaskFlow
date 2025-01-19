/* eslint-disable react/prop-types */
import { Dialog, Pane } from 'evergreen-ui'
import { useState, useEffect } from 'react'
import { getProyecto } from '../../../database/query/select/getProyecto'

import '../../../css/ModalTask/Proyecto/Detalle.css'

export function DetalleProyecto({ changeStatus, proyectoSeleccioando }) {
  const [isShown, setIsShown] = useState(changeStatus)
  const [proyectoFirebase, setProyectoFirebase] = useState([])

  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando)
      setProyectoFirebase(loadedProyecto)
    }
    fetchGetProyecto()
  }, [proyectoSeleccioando])
    
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Información Proyecto"
        onCloseComplete={() => setIsShown(false)}
        hasCancel={false}
        hasFooter={false}
      >
        {
          proyectoFirebase.map((proyectoFB) => (
            <article key={proyectoFB.id} className='article-modal'>
              <div className='article-modal__container__div'>
                  <span className='article-modal__container__div-span'>Proyecto: </span>
                  <span style={{fontSize: '14px', color: 'black'}}>{proyectoFB.nombreProyecto}</span>
              </div>
              <div className='article-modal__container__div'>
                  <span className='article-modal__container__div-span'>Responsable: </span>
                  <span style={{fontSize: '14px', color: 'black'}}>{proyectoFB.responsableProyecto}</span>
              </div>
              <div>
                  <span className='article-modal__container__div-span'>Descripción general: </span>
                  <p style={{fontSize: '14px', color: 'black'}}>{proyectoFB.descripcionProyecto}</p>
              </div>
            </article>
          ))
        }
      </Dialog>
    </Pane>
  )
}