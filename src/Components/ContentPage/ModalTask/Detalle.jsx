
import '../../../css/Dialog/option.css';

export function Detalle ({proyecto, tituloActividad, color, estado, descripcion}) {
  return(
    <article className='article-dialog'>
      <div className='dialog-proyecto__content'>
        <span className='content-span__title'>Actividad</span>
        <span className='content-span__dynamic_span'>{tituloActividad}</span>
      </div>

      <div className='dialog-proyecto__content'>
        <span className='content-span__title'>Estado</span>
        <span className='content-span__dynamic_span'>{estado}</span>
      </div>

      <div className='dialog-proyecto__content'>
        <span className='content-span__title'>Descripción</span>
        <p>{descripcion}</p>
      </div>
    </article>
  )
}