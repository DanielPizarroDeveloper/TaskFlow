import { useState } from 'react'
import { Init_Desplegable_Proyecto } from '../../js/Init'
import proyectos from'../../mocks/Menu/proyectos.json'
import '../../css/menu.css'

export function Menu () {
  const listProyectos = proyectos
  const [proyecto, setProyecto] = useState(true)

  var { pickList_open_proyecto, pickList_close_proyecto, article_proyecto } = Init_Desplegable_Proyecto(proyecto)

  const handlerClickProyecto = () => {
    var status = proyecto
    
    status == false ? 
    ((setProyecto(!status)), (pickList_open_proyecto, pickList_close_proyecto = Init_Desplegable_Proyecto(status))) :
    ((setProyecto(!status)), (pickList_open_proyecto, pickList_close_proyecto = Init_Desplegable_Proyecto(status)))
  }

  return (
      <aside className='aside-menu'>
          <section className='menu-section__lateral'>
            <header className='menu-section__lateral__header-titulo-proyecto'>
              <button className={pickList_open_proyecto} onClick={handlerClickProyecto}>
                <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>

              <button className={pickList_close_proyecto} onClick={handlerClickProyecto}>
                <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

              </button>

              <h4>PROYECTOS</h4>

              <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </header>

            <article className={article_proyecto}>
              <ul className='menu-section__lateral__article__lu'>
              {
                listProyectos.map(({id, titulo}) => {
                  return(
                    <li key={id}>
                      <button className='menu-section__lateral_article__li__button'>
                        <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <span>{titulo}</span>
                      </button>
                    </li> 
                  ) 
                })
              }
              </ul>
            </article>
          </section>
      </aside>
    )
}