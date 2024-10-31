import { constProyecto } from "./categoria"
import { constMenu_Lateral } from './menu'

export function Init_Desplegable_Proyecto (proyecto) {
    const { pickListOpen, pickListClose, detalleProyecto_block, detalleProyecto_none } = constProyecto()

    var pickList_open_proyecto = null
    var pickList_close_proyecto = null
    var article_proyecto = null

    proyecto == true ?
        (pickList_open_proyecto = pickListOpen, pickList_close_proyecto = pickListClose, article_proyecto = detalleProyecto_block) :
        (pickList_open_proyecto = pickListClose, pickList_close_proyecto = pickListOpen, article_proyecto = detalleProyecto_none)

    return ({ pickList_open_proyecto, pickList_close_proyecto, article_proyecto })
}

export function Init_Menu_Lateral (menu) {
    const { asideMenu, asideMenuDynamic, appMain_section, appMain_section_dynamic, headerTituloProyecto, buttonShowButtonMenu, buttonHiddenButtonMenu, displayBlock, displayNone } = constMenu_Lateral()
    

    //Boton que muestra/oculta el menu
    var buttonShow = null
    var buttonHidden = null

    //Contenido del Menu
    var headerTitulo = null
    var articleContentProyecto = null

    //Menu
    var aside_Menu = null

    //Section donde se cargan la actividad por iniciar, en progreso y finalizado
    var appMainSection = null

    menu == true 
        ? (appMainSection = `${appMain_section} ${appMain_section_dynamic}`, aside_Menu = asideMenu, headerTitulo = headerTituloProyecto, buttonShow = `${buttonShowButtonMenu} ${displayBlock}`, buttonHidden = `${buttonHiddenButtonMenu} ${displayNone}`)
        : (appMainSection = appMain_section, aside_Menu = `${asideMenu} ${asideMenuDynamic}`, headerTitulo = `${headerTituloProyecto} ${displayNone}`, articleContentProyecto = displayNone, buttonShow = `${buttonShowButtonMenu} ${displayNone}`, buttonHidden = `${buttonHiddenButtonMenu} ${displayBlock}`)

    return ({ appMainSection, aside_Menu, headerTitulo, articleContentProyecto, buttonShow, buttonHidden })
}