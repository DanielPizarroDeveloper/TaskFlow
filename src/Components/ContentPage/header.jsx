/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { UseAuth } from '../Autenticacion/UseAuth';
import { Crear } from '../ContentPage/ModalTask/Crear';
import { LogoutAuth } from '../Autenticacion/AuthLogout';

import '../../css/header.css';

export function Header({proyecto, callbackFunction}) {

  const { user } = UseAuth();
  const [logoutStatus, setLogoutStatus] = useState(false);
  const [isTaskCreateVisible, setTaskCreateVisible] = useState(false);
  const [headerTitulo, setHeaderTitulo] = useState('header-main__section__bar-tool__elements none-titulo');

  useEffect(() => {
    if (proyecto !== null) {
      setHeaderTitulo('header-main__section__bar-tool__elements')
    }
  }, [proyecto, user])


  const handlerClickShownModalCreate = () => {
    var status = isTaskCreateVisible
    setTaskCreateVisible(!status);
  }

  const handlerClick_logout = () => {
    var status = logoutStatus;
    setLogoutStatus(!status);
  }

  return (
    <div className='header-main__section__bar-tool'>
      <div className='header-main__section__user'>
        <h3>Bienvenido, { user }</h3>
        <button className='header-main__button__logout' onClick={handlerClick_logout}>
          <svg className='header-main-button__svg__logout' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
          </svg>
        </button>
      </div>
      <div className={headerTitulo}>
        <div className='header-main__section__bar-tool__titulo'>
          <h3>{proyecto}</h3>
        </div>

        <button className='bar-tool__elements__button' onClick={() => handlerClickShownModalCreate()}>
          <svg className='bar-tool__elements__button-svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
          </svg>
        </button>
      </div>
      {
        isTaskCreateVisible && <Crear callbackFunction={callbackFunction} changeStatus={isTaskCreateVisible} proyectoSeleccioando={proyecto} />
      }
      {
        logoutStatus && <LogoutAuth changeStatus={logoutStatus} />
      }
    </div>
  )
}