import { useEffect, useState } from 'react';
import { getProyecto } from '../../../js/database/queries/select/select';
import { updateProyecto } from '../../../js/database/queries/update/update';

import '../../../css/Dialog/option.css';
import '../../../css/Dialog/update.css';

export function Actualizar ({proyectoSeleccioando, changeIsShown}) {
  const [proyectoFirebase, setProyectoFirebase] = useState([]);
  const [descripcion, setDescripcion] = useState(null);
  const [statusCSS, setStatusCSS] = useState(false);
  const [textArea, setTextArea] = useState('none');
  const [span, setSpan] = useState('block');
  
  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando);
      setProyectoFirebase(loadedProyecto);
    }
    fetchGetProyecto()
  }, [proyectoSeleccioando])
  
  const updateDescripcion = (event) => {
    event.preventDefault();
    updateProyecto({proyectoSeleccioando, descripcion});
    changeIsShown();
  }

  const changeStyle = () => {
    setStatusCSS((prevState) => !prevState);
    statusCSS == true ? (setTextArea('none'), setSpan('block')) : (setTextArea('block'), setSpan('none'));
  }

  return (
    proyectoFirebase.map((proyectoFB) => (
      <article className='article-dialog' key={proyectoFB.id}>
        <div className='dialog-proyecto__content'>
          <span className='content-span__title'>Proyecto</span>
          <span className='content-span__dynamic_span'>{proyectoFB.nombreProyecto}</span>
        </div>
    
        <div className='dialog-proyecto__content'>
          <span className='content-span__title'>Responsable</span>
          <span className='content-span__dynamic_span'>{proyectoFB.responsableProyecto}</span>
        </div>
    
        <div className='dialog-proyecto__content'>
          <div className='content-update__description'>
            <span className='content-span__title'>Descripción general</span>
            <button className='content-description__button' onClick={changeStyle}>
              <svg className='content-button__svg' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
              </svg>
            </button>
          </div>
          
          <p className={`content-span__dynamic_span ${span}`}>{proyectoFB.descripcionProyecto}</p>
          <textarea className={`content__text-area ${textArea}`} name='descripcion' id='descripcion' onChange={(e) => setDescripcion(e.target.value)} />
        </div>

        <div className='dialog-button'>
            <button className='dialog-button-submit update' type='submit' onClick={updateDescripcion}>Actualizar</button>
        </div>
      </article>
    ))
  )
}