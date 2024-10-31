export function constProyecto() {
    const pickListOpen = 'header-titulo-proyecto__open-button'
    const pickListClose = 'header-titulo-proyecto__close-button'
    const detalleProyecto_block = 'menu-section__lateral__article__content_block'
    const detalleProyecto_none = 'menu-section__lateral__article__content_none'

    return ({ pickListOpen, pickListClose, detalleProyecto_block, detalleProyecto_none })
}

export function constMenu_Lateral() {
    // Valores asignados al contenido del menu lateral
    const asideMenu = 'aside-menu'
    const asideMenuDynamic = 'aside-menu-dynamic'
    const headerTituloProyecto = 'menu-section__lateral__header-titulo-proyecto'

    // Valores CSS del botón que oculta y muestra el menu lateral
    const buttonShowButtonMenu = 'button-SVG-Block'
    const buttonHiddenButtonMenu = 'button-SVG-Hidden'
    const displayBlock = 'display-block'
    const displayNone = 'display-none'

    // Valores de App Section que ajusta el padding cuando le menu este oculto.
    const appMain_section = 'app-main__section'
    const appMain_section_dynamic = 'app-main__section-dynamic'

    return ({ asideMenu, asideMenuDynamic, appMain_section, appMain_section_dynamic, headerTituloProyecto, buttonShowButtonMenu, buttonHiddenButtonMenu, displayBlock, displayNone })
}