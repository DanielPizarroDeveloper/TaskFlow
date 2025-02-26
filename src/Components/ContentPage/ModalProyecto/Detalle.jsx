import { useState, useEffect } from 'react';
import { getProyecto } from '../../../js/database/queries/select/select.js';

import '../../../css/ModalTask/Proyecto/Detalle.css';

export function Detalle({ proyectoSeleccioando }) {
  const [proyectoFirebase, setProyectoFirebase] = useState([]);

  useEffect(() => {
    const fetchGetProyecto = async () => {
      const loadedProyecto = await getProyecto(proyectoSeleccioando);
      setProyectoFirebase(loadedProyecto);
    }
    fetchGetProyecto()
  }, [proyectoSeleccioando])

  return (
    proyectoFirebase.map((proyectoFB) => (
      <article key={proyectoFB.id} style={{display: 'flex', flexDirection: 'column', gap: '20px', alignContent: 'center'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap: '10px'}}>
            <span style={{color: '#0f95cd'}}>Proyecto</span>
            <span style={{fontSize: '14px', color: 'black'}}>{proyectoFB.nombreProyecto}</span>
        </div>

        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap: '10px'}}>
            <span style={{color: '#0f95cd'}}>Responsable</span>
            <span style={{fontSize: '14px', color: 'black'}}>{proyectoFB.responsableProyecto}</span>
        </div>

        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap: '10px'}}>
            <span style={{color: '#0f95cd'}}>Descripción general</span>
            <p style={{fontSize: '14px', color: 'black'}}>{proyectoFB.descripcionProyecto}</p>
        </div>
      </article>
    ))
  )
}