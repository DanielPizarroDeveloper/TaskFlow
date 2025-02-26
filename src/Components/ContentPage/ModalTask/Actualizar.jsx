/* eslint-disable react/prop-types */
import { useState } from 'react';

import '../../../css/Dialog/option.css';
import '../../../css/Dialog/task/update.css'


export function Actualizar({taskID, ID, proyecto, tituloActividad, estado, descripcion, callbackFunction, deleteTaskSelected, onActivate}) {
  // const [IDTask] = useState(ID);

  const [statusTitulo, setStatusTitulo] = useState(false);
  const [statusEstado, setStatusEstado] = useState(false);
  const [statusDescripcion, setStatusDescripcion] = useState(false);

  const [inputText, setInputText] = useState('none');
  const [spanText, setSpanText] = useState('block');

  const [comboBox, setComboBox] = useState('none');
  const [spanComboBox, setSpanComboBox] = useState('block');

  const [textArea, setTextArea] = useState('none');
  const [spanTextArea, setSpanTextArea] = useState('block');


  const changeStyleTitulo = () => {
    setStatusTitulo((prevState) => !prevState);
    statusTitulo == true ? (setInputText('none'), setSpanText('block')) : (setInputText('block'), setSpanText('none'));
  }

  const changeStyleEstado = () => {
    setStatusEstado((prevState) => !prevState);
    statusEstado == true ? (setComboBox('none'), setSpanComboBox('block')) : (setComboBox('block'), setSpanComboBox('none'));
  }

  const changeStyleDescripcion = () => {
    setStatusDescripcion((prevState) => !prevState);
    statusDescripcion == true ? (setTextArea('none'), setSpanTextArea('block')) : (setTextArea('block'), setSpanTextArea('none'));
  }

  return (
    <article className='article-dialog'>
      <div className='dialog-proyecto__content'>
        <div className='content-update__description'>
          <span className='content-span__title'>Actividad</span>
          <button className='content-description__button' onClick={changeStyleTitulo}>
            <svg className='content-button__svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
            </svg>
          </button>
        </div>
        
        <span className={`content-span__dynamic_span ${spanText}`}>{tituloActividad}</span>
        <input className={`content-textbox ${inputText}`} type='text' id='tituloActividad' name='tituloActividad' />
      </div>

      <div className='dialog-proyecto__content'>
        <div className='content-update__description'>
          <span className='content-span__title'>Estado</span>
          <button className='content-description__button' onClick={changeStyleEstado}>
            <svg className='content-button__svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
            </svg>
          </button>
        </div>

        <span className={`content-span__dynamic_span ${spanComboBox}`}>{estado}</span>
        <select
          className={`content-comboBox ${comboBox}`}
          id='estado' 
          name='estado'
        >
          <option value='NUEVO'>NUEVO</option>
          <option value='EN PROGRESO'>EN PROGRESO</option>
          <option value='FINALIZADO'>FINALIZADO</option>
        </select>
      </div>

      <div className='dialog-proyecto__content'>
        <div className='content-update__description'>
          <span className='content-span__title'>Descripción</span>
          <button className='content-description__button' onClick={changeStyleDescripcion}>
            <svg className='content-button__svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
            </svg>
          </button>
        </div>

        <p className={`content-span__dynamic_span ${spanTextArea}`}>{descripcion}</p>
        <textarea className={`content__text-area ${textArea}`} name='descripcion' id='descripcion' />
      </div>

      <div className='dialog-button'>
        <button className='dialog-button-submit update' type='submit'>Actualizar</button>
      </div>
    </article>
  )
}