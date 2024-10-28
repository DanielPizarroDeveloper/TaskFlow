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
    if(status == false)
    {
      setProyecto(!status)
      pickList_open_proyecto, pickList_close_proyecto = Init_Desplegable_Proyecto(status)
    }
    else 
    {
      setProyecto(!status)
      pickList_open_proyecto, pickList_close_proyecto = Init_Desplegable_Proyecto(status)
    }
  }

    return (
        <aside className='aside-menu'>
            <section className='menu-section__lateral'>
              <header className='menu-section__lateral__header-titulo-proyecto'>
                <button className={pickList_open_proyecto} onClick={handlerClickProyecto}>
                  <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <button className={pickList_close_proyecto} onClick={handlerClickProyecto}>
                  <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <h4>PROYECTOS</h4>

                <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 4.5v15m7.5-7.5h-15" />
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