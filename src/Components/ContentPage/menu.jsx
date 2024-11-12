import { useEffect, useState } from 'react'
import { getProyectos } from '../../database/query/select/getProyectos'
import { Init_Desplegable_Proyecto, Init_Menu_Lateral } from '../../js/Init'

import '../../css/menu.css'

// eslint-disable-next-line react/prop-types
export function Menu ({ onPromptChange, onPromptProyecto }) {
  const [proyecto, setProyecto] = useState(true)
  const [menu, setMenu] = useState(true)
  const [proyectosFirebase, setProyectosFirebase] = useState([])

  var { pickList_open_proyecto, pickList_close_proyecto, article_proyecto } = Init_Desplegable_Proyecto(proyecto)
  var { appMainSection, aside_Menu, headerTitulo, articleContentProyecto, buttonShow, buttonHidden } = Init_Menu_Lateral(menu)


  useEffect(() => {
    const fetchProyectos = async () => {
      const loadedProyectos = await getProyectos()
      setProyectosFirebase(loadedProyectos)
    }
    fetchProyectos()
  }, [])

  // Enviar el prompt actualizado al padre
  const sendPrompt = () => { 
    onPromptChange(appMainSection)
  }

  // Envia el proyecto seleccionado
  const sendProyectoSeleccionado = (proyectoSeleccionado) => { 
    onPromptProyecto(proyectoSeleccionado)
  }

  const handlerClickProyecto = () => {
    var status = proyecto
    setProyecto(!status)
  }

  const handlerClickMenu = () => {
    var status = menu
    setMenu(!status)
    sendPrompt()
  }

  const handlerClickSendProyecto = (proyectoSeleccionado) => {
    sendProyectoSeleccionado(proyectoSeleccionado)
  }

  return (
    <aside className={aside_Menu}>
      <section className='menu-section__lateral'>
        <header className={headerTitulo}>
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
        <div className='menu-section__lateral__content_button'>
          <button className={buttonShow} onClick={handlerClickMenu}>
            <svg className='SVG-states' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <button className={buttonHidden} onClick={handlerClickMenu}>
            <svg className='SVG-states' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className={articleContentProyecto}>
          <article className={article_proyecto}>
            <ul className='menu-section__lateral__article__lu'>
              {
                proyectosFirebase.map((proyecto) => (
                    <li className='menu-section__lateral__article__lu__li' key={proyecto.id}>
                      <button className='menu-section__lateral_article__li__button' onClick={() => handlerClickSendProyecto(proyecto.nombreProyecto)}>
                        <svg className='SVG-format' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <span>{proyecto.nombreProyecto}</span>
                      </button>
                    </li> 
                ))
              }
            </ul>
          </article>
        </div>
      </section>
    </aside>
  )
}