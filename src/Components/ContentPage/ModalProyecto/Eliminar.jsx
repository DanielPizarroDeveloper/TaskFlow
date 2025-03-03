import { useEffect, useState } from 'react';
import { getProyecto } from '../../../js/database/queries/select/select';
import { deleteProject } from '../../../js/database/queries/delete/delete';

import '../../../css/Dialog/option.css';
import '../../../css/Dialog/delete.css';

export function Eliminar ({proyectoSeleccioando, callbackRefresh, changeIsShown, setProyecto}) {
  const [proyectoFirebase, setProyectoFirebase] = useState([]);
        
  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando);
      setProyectoFirebase(loadedProyecto);
    }
    fetchGetProyecto();
  }, [proyectoSeleccioando])
        
  const handlerClick_DeleteProject = (event) => {
    event.preventDefault();
    deleteProject(proyectoSeleccioando);
    callbackRefresh((prevState) => !prevState);
    changeIsShown();
    setProyecto(null);
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
              <span className='content-span__title'>Descripción general</span>
              <p className='content-span__dynamic_span'>{proyectoFB.descripcionProyecto}</p>
          </div>
          <div className='dialog-button'>
              <button className='dialog-button-submit delete' type='submit' onClick={handlerClick_DeleteProject}>Eliminar</button>
          </div>
      </article>
    ))
  )
}