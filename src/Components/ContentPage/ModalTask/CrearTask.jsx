/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Dialog, Pane, TextInput, Combobox, Textarea } from 'evergreen-ui'

import '../../../css/ModalTask/Task/Crear.css'

export function CrearTask ({changeStatus}) {
  const [isShown, setIsShown] = useState(changeStatus)

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Creación nueva tarea"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Crear Actividad"
        hasCancel={false}
      >
        
        <article className='article-modal-create'>
          <div className='article-modal-create__content'>
            <span className='article-modal-create__content__span'>Título: </span>
            <TextInput className='article-modal-create__content__input' placeholder="Nombre de la actividad" />
          </div>

          <div className='article-modal-create__content__pickList'>
            <span className='article-modal-create__content__span'>Estado: </span>
            <Combobox
              className='article-modal-create__content__input'
              initialSelectedItem={{ label: 'NUEVO' }}
              items={[{ label: 'NUEVO' }, { label: 'EN PROGRESO' }, { label: 'FINALIZADO' }]}
              itemToString={item => (item ? item.label : '')}
              onChange={selected => console.log(selected)}
            />
          </div>

          <div className='article-modal-create__content__pickList'>
            <span className='article-modal-create__content__span'>Esfuerzo: </span>
            <Combobox
              className='article-modal-create__content__input'
              initialSelectedItem={{ label: '1' }}
              items={[{ label: '1' }, { label: '2' }, { label: '3' },
                      { label: '4' }, { label: '5' }, { label: '6' },
                      { label: '7' }, { label: '8' }, { label: '9' }, { label: '10' }]}
              itemToString={item => (item ? item.label : '')}
              onChange={selected => console.log(selected)} />
          </div>
          
          <br></br>
          
          <span className='article-modal-create__content__span'>Descripción: </span>
          <Textarea className='article-modal-create__content__text-area' placeholder="Textarea placeholder..." />
        </article>
      </Dialog>
    </Pane>
  )
}