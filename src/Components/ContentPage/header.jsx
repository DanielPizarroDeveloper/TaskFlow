import { useState } from 'react'
import { Dialog, Pane, TextInput, Combobox, Textarea } from 'evergreen-ui'

import '../../css/header.css'

export function Header() {

    const [isShown, setIsShown] = useState(false)

    return (
        <div className='header-main__section__bar-tool'>
          <Pane>
            <Dialog
              isShown={isShown}
              title="Creación nueva tarea"
              onCloseComplete={() => setIsShown(false)}
              confirmLabel="Crear Actividad"
              hasCancel={false}
            >
              <article className='header-main__section__panel__article'>
                <div className='header-main__section__panel__article-content'>
                  <span className='panel__article__content__span'>Título: </span>
                  <TextInput className='panel__article__content_input' placeholder="Nombre de la actividad" />
                </div>

                <div className='header-main__section__panel__pickList'>
                  <span className='panel__article__content__span'>Estado: </span>
                  <Combobox
                    className='panel__article__content_input'
                    initialSelectedItem={{ label: 'NUEVO' }}
                    items={[{ label: 'NUEVO' }, { label: 'EN PROGRESO' }, { label: 'FINALIZADO' }]}
                    itemToString={item => (item ? item.label : '')}
                    onChange={selected => console.log(selected)}
                  />
                </div>

                <div className='header-main__section__panel__pickList'>
                  <span className='panel__article__content__span'>Esfuerzo: </span>
                  <Combobox
                    className='panel__article__content_input'
                    initialSelectedItem={{ label: '1' }}
                    items={[{ label: '1' }, { label: '2' }, { label: '3' },
                            { label: '4' }, { label: '5' }, { label: '6' },
                            { label: '7' }, { label: '8' }, { label: '9' }, { label: '10' }]}
                    itemToString={item => (item ? item.label : '')}
                    onChange={selected => console.log(selected)} />
                </div>
                <br></br>
                <span className='panel__article__content__span'>Descripción: </span>
                <Textarea className='header-main__Section__panel__input__text-area' placeholder="Textarea placeholder..." />
              </article>
            </Dialog>

            <div className='header-main__section__bar-tool__elements'>
              <button className='bar-tool__elements__button' onClick={() => setIsShown(true)}>
                <span className='bar-tool__elements__span'>Nueva Actividad</span>
              </button>

              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                <h3>Título proyecto</h3>
              </div>

              <button className='bar-tool__elements__button' onClick={() => setIsShown(true)}>
                <span className='bar-tool__elements__span'>Más detalles</span>
              </button>
            </div>
          </Pane>
        </div>
    )
}