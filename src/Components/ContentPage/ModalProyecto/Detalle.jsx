import { useState, useEffect } from 'react';
import { getProyecto } from '../../../js/database/queries/select/select.js';

import '../../../css/Dialog/option.css';

export function Detalle({ proyectoSeleccioando }) {
  const [proyectoFirebase, setProyectoFirebase] = useState([]);

  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando);
      setProyectoFirebase(loadedProyecto);
    }
    fetchGetProyecto();
  }, [proyectoSeleccioando])

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
            <span className='content-span__title'>Descripción general</span>
            <p className='content-span__dynamic_span'>{proyectoFB.descripcionProyecto}</p>
        </div>
      </article>
    ))
  )
}