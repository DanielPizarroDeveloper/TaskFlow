import { constProyecto } from "./categoria"

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