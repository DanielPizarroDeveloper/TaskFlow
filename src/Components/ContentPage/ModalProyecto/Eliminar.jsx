import { useEffect, useState } from 'react';
import { getProyecto } from '../../../js/database/queries/select/select';
import { deleteProject } from '../../../js/database/queries/delete/delete';

import '../../../css/ModalTask/Proyecto/Eliminar.css';

export function Eliminar ({proyectoSeleccioando, callbackRefresh, changeIsShown}) {
  const [proyectoFirebase, setProyectoFirebase] = useState([]);
        
  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando);
      setProyectoFirebase(loadedProyecto);
    }
    fetchGetProyecto()
  }, [proyectoSeleccioando])
        
  const handlerClick_DeleteProject = (event) => {
    event.preventDefault();
    deleteProject(proyectoSeleccioando);
    callbackRefresh((prevState) => !prevState);
    changeIsShown();
  }
  
  return (
    proyectoFirebase.map((proyectoFB) => (
      <article className='article-dialog__Elimiar' key={proyectoFB.id}>
          <div className='dialog-proyecto-delete__content'>
              <span className='content-span-delete__title'>Proyecto</span>
              <span className='content-span-delete__dynamic_span'>{proyectoFB.nombreProyecto}</span>
          </div>    
          <div className='dialog-proyecto-delete__content'>
              <span className='content-span-delete__title'>Responsable</span>
              <span className='content-span-delete__dynamic_span'>{proyectoFB.responsableProyecto}</span>
          </div>
          <div className='dialog-proyecto-delete__content'>
              <span className='content-span-delete__title'>Descripción general</span>
              <p className='content-span-delete__dynamic_span'>{proyectoFB.descripcionProyecto}</p>
          </div>
          <div className='dialog-delete-button'>
              <button className='pane-content-submit__delete' type='submit' onClick={handlerClick_DeleteProject}>Eliminar</button>
          </div>
      </article>
    ))
  )
}