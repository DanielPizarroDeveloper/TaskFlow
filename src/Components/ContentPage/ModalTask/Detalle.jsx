export function Detalle ({proyecto, tituloActividad, color, estado, descripcion}) {
    return(
        <article className='article-pane-eliminar'>
          <div className='pane-content'>
            <p style={{color: color}}><strong>Actividad:</strong></p>
            <p>{tituloActividad}</p>
          </div>
          <div className='pane-content'>
            <p style={{color: color}}><strong>Estado:</strong></p>
            <p>{estado}</p>
          </div>
          <div className='pane-content-description'>
            <p style={{color: color}}><strong>Descripción</strong></p>
            <p>{descripcion}</p>
          </div>
        </article>
    )
}