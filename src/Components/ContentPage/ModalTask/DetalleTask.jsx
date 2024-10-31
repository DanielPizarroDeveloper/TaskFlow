/* eslint-disable react/prop-types */
import { Dialog, Pane, TextInput, Combobox, Textarea } from 'evergreen-ui'
import { useState } from 'react'

export function DetalleTask({changeStatus}) {
    const [isShown, setIsShown] = useState(changeStatus)

    return (
        <Pane>
          <Dialog
            isShown={isShown}
            title="Información Proyecto"
            onCloseComplete={() => setIsShown(false)}
            hasCancel={false}
            hasFooter={false}
          >
            
            <article className='header-main__section__panel__article'>
                <div className='header-main__section__panel__article-content'>
                    <span className='panel__article__content__span'>Título: </span>
                    <span style={{color: 'black'}}>Título del Proyecto</span>
                </div>
                <br />
                <div>
                    <span className='panel__article__content__span'>Descripción: </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus eum fuga impedit, quam iure, doloremque, nesciunt obcaecati totam dicta quos ea sit debitis ducimus corrupti repudiandae nam similique dolorum!</p>
                </div>
            </article>
          </Dialog>
        </Pane>
    )
}