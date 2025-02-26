export function Detalle ({proyecto, tituloActividad, color, estado, descripcion}) {
    return(
        <article className='article-pane-eliminar'>
          <div className='pane-content'>
            <p style={{color: '#0f95cd'}}><strong>Actividad:</strong></p>
            <p>{tituloActividad}</p>
          </div>
          <div className='pane-content'>
            <p style={{color: '#0f95cd'}}><strong>Estado:</strong></p>
            <p>{estado}</p>
          </div>
          <div className='pane-content-description'>
            <p style={{color: '#0f95cd'}}><strong>Descripción</strong></p>
            <p>{descripcion}</p>
          </div>
        </article>
    )
}