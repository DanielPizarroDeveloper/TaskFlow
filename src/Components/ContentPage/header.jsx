import { useState } from 'react'
import { CrearTask } from '../ContentPage/ModalTask/CrearTask'

import '../../css/header.css'
import { DetalleTask } from './ModalTask/DetalleTask'

export function Header() {
  const [isTaskCreateVisible, setTaskCreateVisible] = useState(false)
  const [isTaskDetalleVisible, setTaskDetalleVisible] = useState(false)
  
  const handlerClickShownModalCreate = () => {
    var status = isTaskCreateVisible
    setTaskCreateVisible(!status)
  }

  const handlerClickShownModalDetalle = () => {
    var status = isTaskDetalleVisible
    setTaskDetalleVisible(!status)
  }

  return (
    <div className='header-main__section__bar-tool'>
      <div className='header-main__section__bar-tool__elements'>
        <button style={{borderRadius: '99px', width: '30px', height: '30px', backgroundColor: 'transparent', border: '0'}}  onClick={() => handlerClickShownModalCreate()}> {/* className='bar-tool__elements__button' */} 
          <svg style={{width: '40px', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
          <h3>Título proyecto</h3>
        </div>

        <button style={{borderRadius: '99px', width: '30px', height: '30px', backgroundColor: 'transparent', border: '0'}} onClick={() => handlerClickShownModalDetalle()}> {/* className='bar-tool__elements__button' */} 
          <svg style={{width: '40px', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button> 
      </div>

      {
        isTaskCreateVisible && <CrearTask changeStatus={isTaskCreateVisible} />
      }
      {
        isTaskDetalleVisible && <DetalleTask changeStatus={isTaskDetalleVisible} />
      }
    </div>
  )
}